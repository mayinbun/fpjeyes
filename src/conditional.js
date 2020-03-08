// Ramda conditional
const R = require('ramda');



const john = 'john';
const jane = 'jane';

const theChosenOne = 'chosen one';

const f = R.cond([
    [R.equals('john'), R.always(`The name is ${ john }`)],
    [R.equals('jane'), R.always(`The name is ${ jane }`)],
    [
        R.anyPass([R.equals(john), R.equals(theChosenOne)]),
        R.always('I am john or the chosen one')
    ]
]);

console.log(f(john));
console.log(f(jane));
console.log(f('unknown-name'));

console.log(f(theChosenOne));