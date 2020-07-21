export function multiply (x, y) {
    // Check that values have been supplied
    if (typeof(x) !== "number" || typeof(y) !== "number") {
        return "Correct paramaters not defined, please supply two numbers";
    }
    return x * y;
}