export var Calc = function (start) {
    var self = this;

    this.add = function(x) {
        start = start + x;
        return start;
    }

    this.multiply = function(x) {
        start = start * x;
        return start;
    }

    this.equals = function() {
        return start;
    }
}

export function MathAdd(x,y) {
    return new Calc(x).add(y);
}
