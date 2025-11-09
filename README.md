🚀 Project Overview: Twilight Imperium Map Tool

This repository is a **personal, maintained fork** of the original **Twilight Imperium 4 Map Tool**.

I am using this fork primarily as a **testbed and learning environment** for my own development. My goals are twofold:

1.  **Personal Development:** To practice modern JavaScript/React workflows and get back into coding after an extended absence.
2.  **Group Adaptation:** To adapt this tool to meet the specific map generation needs of my local gaming group.

This project is a separate line of development from the original.

---

## 🤝 Attribution and Original Work

This tool is made possible by the excellent foundation laid by the original creator, KeeganW, and includes contributions from the community.

* **Original Repository (KeeganW):** [https://github.com/KeeganW/ti4](https://github.com/KeeganW/ti4)
* **Included Expansion PR (Thunder's Edge):** [https://github.com/astevezimm/ti4](https://github.com/astevezimm/ti4)
* **Original Creator:** [KeeganW](https://github.com/KeeganW)
* **License:** This project continues to operate under the original license as determined by the original creator.

---

## 📝 My Maintenance Status

The primary development branch for this fork is **`main`**.

* **Status:** Commits on this branch represent my independent work, fixes (including the necessary asset path corrections), and adaptation of the tool for my specific needs.
* **Future:** While the current focus is on personal development, any generic bug fixes or widely applicable improvements developed here may be considered for submission back to the original project, should it become active again.

# TI4 Generator
A web tool to generate Twilight Imperium 4 game boards through many custom settings.

## Web Quick Start

Visit the [web page located on github pages](https://keeganw.github.io/ti4/). Check with original repo to see what this is running from.

## Development Setup

1. Install Node and NPM for your OS using [their website](https://nodejs.org/en/) or brew on Mac (`brew install node`)
1. In the root directory of the cloned project, run `npm install`
1. Once it is done, you can start the development server with `npm start`. If a web page is not automatically opened, go to [localhost:3000/ti4](http://localhost:3000/ti4)

## Using the Tool

The tool has many features, go poke around! Here is a list of notable features:

- Automatic map generation based on user input. Options include:
    - Using new Prophecy of Kings content
    - Setting the player count
    - Setting what the board will look like from various custom maps
    - Setting how tiles are places by working with their weights
    - Seeding the generation with a custom number between 1-10,000
    - Automatically picking races for players
    - Set player names for showing on the map
    - Set races that can be picked from
    - Randomization of how tiles are placed
    - Moving better planets towards the middle
- Drag and drop tiles to customize your board
- Zoom in and out to get a better idea of what certain tiles are
- Show an overlay with the tile numbers for when you are ready to build your board
- Replace any tiles on the board with any unused tiles
- Show detailed information about the adjacenct planets to each home system
- Sharable links to send to your friends
- Copy the tile string to view in Table Top Simulator (TTS)

## Pushing Changes to Github Pages

```bash
npm run deploy
```

Using react's `gh-pages` you can simply run the above command to deploy to the github page.
