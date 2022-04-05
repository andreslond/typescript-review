//Good practice: Use the types!
const framework: string = 'Angular';
//Imposible change the type osd the varaible.
//framework = 10;

//Boolean variable
const isProduction: boolean = true;
//number variable
const PORT: number = 3000;
//Array of strings
const styles: Array<string> = ["./css/style.css"];
//function variable
const sayHello: Function = (name: string): string => `Hello ${name}`;
const value: string = sayHello('Ernesto');
console.log(value);

//The browsers can't understant typeScript, for that reason typeScript has an special
//process to convert TypeScript code to JavaScript code.
//This process is called transpilation.

//To execute this process you can use the command:
//tsc <file path>
//As output we will get the TypeScript file as a JavaScript file (.js extension)
