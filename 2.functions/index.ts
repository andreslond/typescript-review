//Funcitons
function suma(a: number, b: number): number {
    return a + b;
}

function mathOperation(callback: Function, a: number, b: number): number {
    return callback(a, b);
}

const result: number = mathOperation((a: number, b: number): number => a + b, 4, 4);

//Stric mode is setted in tsconfig, for that reason, all types needs to be defined.
//mathOperation("", true, 2);
