# AeroSim ✈️

A small, interactive aircraft aerodynamics learning project. Adjust the flight conditions and watch the estimated lift, drag and aerodynamic coefficients update live.

## Run it

No installation or external libraries are required.

1. Download or clone this repository.
2. Open the `aerosim` folder.
3. Open `index.html` in a modern browser.

## Controls

- **Airspeed:** 20–250 m/s
- **Wing reference area:** 5–80 m²
- **Air density:** 0.5–1.225 kg/m³
- **Angle of attack:** -5° to 22°

## Equations

Dynamic pressure:

`q = ½ρv²`

Lift:

`L = qSCₗ`

Drag:

`D = qSCᵈ`

The current teaching model uses a simple lift-coefficient curve that peaks near a chosen stall angle, followed by a simplified drop in lift. Drag coefficient is estimated with a basic parabolic drag polar:

`Cᵈ = 0.025 + 0.045Cₗ²`

## Important limitations

This is an educational, low-fidelity model. It does not solve computational fluid dynamics (CFD), model a specific airfoil, account for compressibility or Reynolds-number effects, or predict real aircraft performance. Do not use it for aircraft design, operation or safety decisions.

## Roadmap

- [x] Live lift and drag calculations
- [x] Adjustable flight conditions
- [x] Lift coefficient vs angle-of-attack graph
- [ ] Compare multiple airfoil models
- [ ] Add a drag polar chart
- [ ] Add aircraft mass and a simple climb/performance estimate


## Setup guides

- [Phone and PC setup tutorial](PHONE_AND_PC_TUTORIAL.md): download the project, keep the files in the right folders, and run AeroSim on Android or a computer.
