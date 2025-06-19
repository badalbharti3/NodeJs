import greet from './greeting.js';
import * as math from './mathOperations.js';

console.log(greet('Raghav'));
console.log('Math Operations:');
console.log(`Sum: ${math.add(5, 3)}`);
console.log(`Difference: ${math.subtract(5, 3)}`);
console.log(`Product: ${math.multiply(5, 3)}`);
console.log(`Quotient: ${math.divide(5, 3)}`);