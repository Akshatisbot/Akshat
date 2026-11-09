# AeroSim: Phone & PC Setup Guide 📱💻

This guide explains exactly where the project files go and how to run AeroSim on a phone or computer.

## 1. Keep the files in this structure

After downloading the project, the folders should look like this:

```text
Akshat/
└── aerosim/
    ├── index.html
    ├── style.css
    ├── app.js
    ├── README.md
    └── PHONE_AND_PC_TUTORIAL.md
```

**Important:** Keep all three main files (`index.html`, `style.css`, and `app.js`) together inside the same `aerosim` folder. Do not rename them unless you also update the file references in the code.

## 2. Run it on a PC or laptop

1. Open the [AeroSim project on GitHub](https://github.com/NeonPhobiaStudios/Akshat/tree/aerosim-v1/aerosim).
2. Open the repository's main page, then select **Code → Download ZIP**.
3. Extract the ZIP file.
4. Open the extracted `Akshat` folder.
5. Open the `aerosim` folder.
6. Double-click `index.html`.
7. Choose Chrome, Edge or Firefox if your computer asks which app to use.

That's it. AeroSim runs in your browser. You do not need Python, Node.js or extra libraries.

## 3. Run it on an Android phone

### Easiest method: GitHub Pages

GitHub Pages can host this project as a small website, so you can open it in Chrome without installing a code editor.

1. Sign in to GitHub and open the **Akshat** repository.
2. Switch to the **aerosim-v1** branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **aerosim-v1**.
6. Select folder **/(root)**, then tap **Save**.
7. Wait a few minutes for GitHub Pages to publish the site.
8. Open this address in your phone browser:

   https://neonphobiastudios.github.io/Akshat/aerosim/

If GitHub shows a Pages URL in Settings, use that URL and add `aerosim/` at the end if needed. The first publish can take a few minutes.

### Alternative: run local files with a code editor

1. Download the repository ZIP from GitHub.
2. Extract it using your phone's file manager.
3. Open the extracted `Akshat/aerosim` folder in a code editor that supports HTML preview, such as Acode.
4. Open `index.html` and use the editor's preview option.

The exact buttons can differ between editor versions. Keep `index.html`, `style.css` and `app.js` in the same folder.

## 4. What each file does

| File | Job |
|---|---|
| `index.html` | The page structure and controls |
| `style.css` | Colours, layout and design |
| `app.js` | Lift, drag and graph calculations |
| `README.md` | Project overview and equations |
| `PHONE_AND_PC_TUTORIAL.md` | This setup guide |

## 5. If something does not work

- **The page looks unstyled:** Check that `style.css` is beside `index.html`.
- **The sliders do nothing:** Check that `app.js` is beside `index.html`.
- **You see a 404 on GitHub Pages:** Check that Pages is publishing branch `aerosim-v1` from `/(root)`, and open the URL ending in `/aerosim/`.
- **You changed code but see the old page:** Refresh the browser. On a phone, try closing and reopening the tab.

## Safety and accuracy note

AeroSim is a simplified learning project, not a real aircraft design or flight-planning tool. Its estimates should not be used for real-world aircraft decisions.
