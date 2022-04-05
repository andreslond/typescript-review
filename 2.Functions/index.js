"use strict";
//Funcitons
function suma(a, b) {
    return a + b;
}
function mathOperation(callback, a, b) {
    return callback(a, b);
}
const result = mathOperation((a, b) => a + b, 4, 4);
//Stric mode is setted in tsconfig, for that reason, all types needs to be defined.
//mathOperation("", true, 2);
