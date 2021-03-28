const Calculation = require("../src/Models/Calculation");
const Sum = require('../src/Operations/Sum')
const Difference = require('../src/Operations/Difference')
const Product = require('../src/Operations/Product')
const Quotient = require('../src/Operations/Quotient')
const Power = require('../src/Operations/Power')
const Root = require('../src/Operations/Root')

test('Assigning operation of Sum', () => {
    let calculation = new Calculation(1,2,Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Sum);
});
test('Results of Sum function', () => {
    let calculation = new Calculation(1,2,Sum)
    expect(calculation.GetResults()).toBe(3);
});
test('Results of Difference function', () => {
    let calculation = new Calculation(1,2,Difference)
    expect(calculation.GetResults()).toBe(-1);
});
test('Results of Product function', () => {
    let calculation = new Calculation(2,3,Product)
    expect(calculation.GetResults()).toBe(6);
});
test('Results of Quotient function', () => {
    let calculation = new Calculation(4,2,Quotient)
    expect(calculation.GetResults()).toBe(2);
});
test('Results of Power function', () => {
    let calculation = new Calculation(2,3,Power)
    expect(calculation.GetResults()).toBe(8);
});
test('Results of Root function', () => {
    let calculation = new Calculation(125,3,Root)
    expect(calculation.GetResults()).toBeCloseTo(5);
});
