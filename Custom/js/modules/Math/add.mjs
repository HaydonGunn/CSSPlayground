const reducer = (accumulator, currentValue) => accumulator + currentValue; // This is the function done with the .reduce method on the array

// Basic Maths module
export function add() {
    // console.log(arguments);
    var arr = Array.prototype.slice.call(arguments);
    return arr.reduce(reducer, 5); // The 5 here is the initial value used
}
