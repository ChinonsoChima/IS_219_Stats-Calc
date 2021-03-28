const Power = require("../Power");
const Mean = require("./Mean");
const Quotient = require("../Quotient");


function Variance(values) {
    let mean = 0, i, n = 0;
    mean =  Mean(values);

    for(i = 0; i < values.length; i++){
        n += Power(values[i] - mean, 2);
    }
    return Quotient(n,values.length);
}
module.exports = Variance;