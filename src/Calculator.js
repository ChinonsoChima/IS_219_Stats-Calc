const Sum = require('./Operations/Sum')
const Difference = require('./Operations/Difference')
const Product = require('./Operations/Product')
const Quotient = require('./Operations/Quotient')
const Power = require('./Operations/Power')
const Root = require('./Operations/Root')
const Calculation = require('./Models/Calculation')

//every function in this class does one thing and one thing only, adhering to the S of SOLID
//In the case of the operations, they do their job of three things (creating the calculation, adding it to history, and returning) very concisely by wrapping other functions together
class Calculator{
    Calculations = [];
    Sum(a,b){
        this.AddCalculation(new Calculation(a, b, Sum));
        return this.GetLastCalculation();
    }
    Difference(a,b){
        this.AddCalculation(new Calculation(a, b, Difference));
        return this.GetLastCalculation();
    }
    Product(a,b){
        this.AddCalculation(new Calculation(a, b, Product));
        return this.GetLastCalculation();
    }
    Quotient(a,b){
        this.AddCalculation(new Calculation(a, b, Quotient));
        return this.GetLastCalculation();
    }
    Square(a){
        this.AddCalculation(new Calculation(a, 2, Power));
        return this.GetLastCalculation();
    }
    SquareRoot(a){
        this.AddCalculation(new Calculation(a, 2, Root));
        return this.GetLastCalculation();
    }
    ClearHistory(){
        this.Calculations = [];
    }
    //This function allows the O of SOLID by letting custom calculations to be added besides the base ones
    AddCalculation(calculation){
        this.Calculations.push(calculation);
    }
    GetLastCalculation(){
        return this.Calculations[this.Calculations.length - 1];
    }
    Copy(){
        let newCalc = new Calculator();
        newCalc.Calculations = this.Calculations;
        return newCalc;
    }
}
module.exports = Calculator;