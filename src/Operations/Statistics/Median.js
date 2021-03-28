const Sum = require("../Sum");
function Median(values) {
    let n = values.length/2;
    values.sort(function(a,b) {
        return a - b;
    });

    return Sum(values[n-1], values[n]) / 2.0;
}
module.exports = Median;
