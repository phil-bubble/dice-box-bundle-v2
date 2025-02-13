# Dice Box Bundle V2

A bundled version of [@3d-dice/dice-box](https://github.com/3d-dice/dice-box) with all available themes, specifically built for Bubble.io plugins.

## CDN URLs

Main bundle:
```javascript
https://phil-bubble.github.io/dice-box-bundle-v2/dice-box.bundle.js
```

Theme assets:
```javascript
https://phil-bubble.github.io/dice-box-bundle-v2/assets/dice-box/themes/{theme-name}/theme.config.json
```

## Available Themes
- default, default-extras
- blueGreenMetal
- diceOfRolling, diceOfRolling-fate
- gemstone, gemstoneMarble
- genesys, genesys2
- rock, rust
- smooth, smooth-pip
- wooden

## Usage in Bubble
```javascript
const diceBox = new DiceBox("#dice-box", {
  assetPath: "https://phil-bubble.github.io/dice-box-bundle-v2/assets/dice-box"
});

// Initialize
await diceBox.init();

// Roll some dice
await diceBox.roll("2d20");
```

## Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Build the bundle: `npm run build`
4. For development server: `npm run dev`

## Bundle Structure
```
dist/
├── dice-box.bundle.js    # Main bundle file
└── assets/
    └── dice-box/        # Asset root directory
        └── themes/      # All theme files
```

## License
This project bundles [@3d-dice/dice-box](https://github.com/3d-dice/dice-box) and [@3d-dice/dice-themes](https://github.com/3d-dice/dice-themes). Please refer to their respective licenses.
