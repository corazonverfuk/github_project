export const generateRandomTsCode = () => {
  // Generate a random number between 1 and 10
  const num = Math.floor(Math.random() * 10) + 1;

  // Return the code based on the generated number
  if (num === 1) {
    return 'console.log("Hello, world!");';
  } else if (num === 2) {
    return 'const name = "John"; console.log(`Hello, ${name}!`);';
  } else if (num === 3) {
    return 'interface Person { name: string; age: number; }; const person: Person = { name: "Alice", age: 30 }; console.log(person.name + " is " + person.age + " years old.");';
  } else if (num === 4) {
    return 'class Greeter { greet() { console.log("Hello, world!"); } } const greeter = new Greeter(); greeter.greet();';
  } else if (num === 5) {
    return 'function add(a: number, b: number): number { return a + b; } const result = add(3, 5); console.log(result);';
  } else if (num === 6) {
    return 'const colors = ["red", "green", "blue"]; console.log(colors[1]);';
  } else if (num === 7) {
    return 'const arr: number[] = [1, 2, 3]; const obj = { name: "John", age: 30 }; console.log(arr, obj);';
  } else if (num === 8) {
    return 'interface Person { name: string; age: number; gender: string; }; const person: Person = { name: "Alice", age: 30, gender: "female" }; console.log(person.name + " is " + person.age + " years old and is a " + person.gender + ".");';
  } else if (num === 9) {
    return 'function add(a: number, b: number): number { return a + b; } const result = add(3, 5); console.log(result); function subtract(a: number, b: number): number { return a - b; } const result2 = subtract(10, 7); console.log(result2);';
  } else if (num === 10) {
    return 'interface Person { name: string; age: number; gender: string; }; const person: Person = { name: "Alice", age: 30, gender: "female" }; console.log(person.name + " is " + person.age + " years old and is a " + person.gender + ".");';
  } else {
    return 'console.log("Hello, world!");';
  }
};
