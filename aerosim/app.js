const defaults = { speed: 80, area: 30, density: 1.225, angle: 5 };
const controls = Object.fromEntries(Object.keys(defaults).map(key => [key, document.getElementById(key)]));
const outputs = {
  speed: document.getElementById("speedValue"),
  area: document.getElementById("areaValue"),
  density: document.getElementById("densityValue"),
  angle: document.getElementById("angleValue")
};
const number = value => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(value);

// A deliberately simple teaching model, not measured data for a real airfoil.
function liftCoefficient(angle) {
  const stallAngle = 14;
  const peakLift = 1.57;
  if (angle <= stallAngle) return 0.1 + 0.105 * angle;
  return peakLift - 0.065 * (angle - stallAngle);
}

function calculate() {
  const speed = Number(controls.speed.value);
  const area = Number(controls.area.value);
  const density = Number(controls.density.value);
  const angle = Number(controls.angle.value);

  outputs.speed.value = number(speed);
  outputs.area.value = number(area);
  outputs.density.value = density.toFixed(3);
  outputs.angle.value = number(angle);

  const q = 0.5 * density * speed ** 2;
  const cl = liftCoefficient(angle);
  const cd = 0.025 + 0.045 * cl ** 2;
  const lift = q * area * cl;
  const drag = q * area * cd;

  document.getElementById("lift").textContent = number(lift);
  document.getElementById("drag").textContent = number(drag);
  document.getElementById("cl").textContent = cl.toFixed(3);
  document.getElementById("cd").textContent = cd.toFixed(4);
  document.getElementById("ratio").textContent = drag > 0 ? (lift / drag).toFixed(2) : "—";
  document.getElementById("pressure").textContent = number(q) + " Pa";
  drawChart(angle);
}

function drawChart(currentAngle) {
  const canvas = document.getElementById("chart");
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const w = rect.width, h = rect.height;
  const pad = { left: 38, right: 12, top: 14, bottom: 29 };
  const plotW = w - pad.left - pad.right, plotH = h - pad.top - pad.bottom;
  const x = angle => pad.left + ((angle + 5) / 27) * plotW;
  const y = cl => pad.top + ((1.8 - cl) / 2.2) * plotH;

  ctx.clearRect(0, 0, w, h);
  ctx.font = "10px system-ui";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#263b52";
  ctx.fillStyle = "#91a4bb";
  for (let value = -0.4; value <= 1.6001; value += 0.4) {
    const py = y(value);
    ctx.beginPath(); ctx.moveTo(pad.left, py); ctx.lineTo(w - pad.right, py); ctx.stroke();
    ctx.fillText(value.toFixed(1), 2, py + 3);
  }
  for (let angle = -5; angle <= 20; angle += 5) {
    const px = x(angle);
    ctx.beginPath(); ctx.moveTo(px, pad.top); ctx.lineTo(px, h - pad.bottom); ctx.stroke();
    ctx.fillText(angle + "°", px - 9, h - 8);
  }

  ctx.beginPath();
  for (let angle = -5; angle <= 22; angle += 0.25) {
    const px = x(angle), py = y(liftCoefficient(angle));
    if (angle === -5) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = "#43d9c5"; ctx.lineWidth = 2.5; ctx.stroke();

  const markerX = x(currentAngle), markerY = y(liftCoefficient(currentAngle));
  ctx.beginPath(); ctx.arc(markerX, markerY, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#43d9c5"; ctx.fill();
  ctx.strokeStyle = "#eafffc"; ctx.lineWidth = 2; ctx.stroke();
}

Object.values(controls).forEach(input => input.addEventListener("input", calculate));
document.getElementById("reset").addEventListener("click", () => {
  Object.entries(defaults).forEach(([key, value]) => { controls[key].value = value; });
  calculate();
});
window.addEventListener("resize", () => drawChart(Number(controls.angle.value)));
calculate();