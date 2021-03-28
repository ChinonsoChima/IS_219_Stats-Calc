const Math = require("mathjs");
const Mean = require("./Mean");
const Mode = require("./Mode");
const Sk = require("compute-skewness");

//I found this website that shows how to install the math function
//https://www.npmjs.com/package/compute-skewness

function Skewness(values) {
    return Sk(values);
}
module.exports = Skewness;