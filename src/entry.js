import DiceBox from '@3d-dice/dice-box';

// Expose DiceBox globally for non-module environments (like Bubble)
if (typeof window !== 'undefined') {
    window.DiceBox = DiceBox;
}

// Export DiceBox as a module
export default DiceBox;
