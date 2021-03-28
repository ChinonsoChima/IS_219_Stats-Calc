//const Calculator = require("../../Calculator");
const Sum = require("../Sum");
const Quotient = require("../Quotient");
//class StatisticsOperations extends Calculator{

    function Mean(values){
        let addition = 0;
        for(let i = 0; i < values.length; i++){
                addition = Sum(addition, values[i]); //let the addition equals to the function for Sum
        }
        return Quotient(addition,values.length); //takes the "n" number of values and add them together.
                                           // Then divide it using the Quotient function
    }

module.exports = Mean;