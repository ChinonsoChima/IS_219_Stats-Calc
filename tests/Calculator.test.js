const Calculator = require("../src/Calculator");
const Calculation = require("../src/Models/Calculation");
const Sum = require('../src/Operations/Sum')
const Difference = require('../src/Operations/Difference')
const Product = require('../src/Operations/Product')
const Quotient = require('../src/Operations/Quotient')
const Power = require('../src/Operations/Power')
const Root = require('../src/Operations/Root')
let calculator = new Calculator();

test('Calculator Add function', () => {
    let calculation = calculator.Sum(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Sum);
    expect(calculation.GetResults()).toBe(3);
});
test('Calculator Difference function', () => {
    let calculation = calculator.Difference(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Difference);
    expect(calculation.GetResults()).toBe(-1);
});
test('Calculator Product function', () => {
    let calculation = calculator.Product(2,3);
    expect(calculation.a).toBe(2);
    expect(calculation.b).toBe(3);
    expect(calculation.operation).toBe(Product);
    expect(calculation.GetResults()).toBe(6);
});
test('Calculator Quotient function', () => {
    let calculation = calculator.Quotient(4,2);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Quotient);
    expect(calculation.GetResults()).toBe(2);
});
test('Calculator Square function', () => {
    let calculation = calculator.Square(4);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Power);
    expect(calculation.GetResults()).toBe(16);
});
test('Calculator Square Root function', () => {
    let calculation = calculator.SquareRoot(4);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Root);
    expect(calculation.GetResults()).toBe(2);
});
test('Calculator ClearHistory', () => {
    calculator.Sum(1,2);
    calculator.ClearHistory();
    expect(calculator.Calculations.length).toBe(0);
});
test('Calculator adding to Calculations after doing operation', () => {
    calculator.ClearHistory()
    calculator.SquareRoot(4);
    calculator.Square(4);
    calculator.Sum(4,2);
    expect(calculator.Calculations.length).toBe(3);
    calculator.Calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(calculator.Calculations[0].operation = Root);
    expect(calculator.Calculations[1].operation = Power);
    expect(calculator.Calculations[2].operation = Sum);
});

test('Calculator adding to Calculations with AddCalculation', () => {
    calculator.ClearHistory()
    calculator.AddCalculation(new Calculation(1,2,Sum));
    calculator.AddCalculation(new Calculation(4,2,Root));
    calculator.AddCalculation(new Calculation(3,2,Product));
    expect(calculator.Calculations.length).toBe(3);
    calculator.Calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(calculator.Calculations[0].operation = Sum);
    expect(calculator.Calculations[1].operation = Root);
    expect(calculator.Calculations[2].operation = Product);
});

test('Calculator get last Calculation', () => {
    calculator.ClearHistory()
    calculator.SquareRoot(4);
    calculator.Square(4);
    calculator.Sum(4,2);
    expect(calculator.GetLastCalculation().operation).toBe(Sum);
});

test('Calculator copy method', () => {
    calculator.ClearHistory()
    calculator.SquareRoot(4);
    calculator.Square(4);
    calculator.Sum(4,2);
    let newCalc = calculator.Copy();
    expect(newCalc.Calculations).toBe(calculator.Calculations);
});