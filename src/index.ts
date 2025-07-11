// Basic TypeScript file to test compilation
console.log('Hello TypeScript!');

export interface TestInterface {
  message: string;
}

const test: TestInterface = {
  message: 'TypeScript is working!'
};

console.log(test.message);
