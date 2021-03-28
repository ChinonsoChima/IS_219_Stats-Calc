const Power = require("../Power");
const Mean = require("./Mean");
const Sum = require("../Sum");
const cov = require('compute-covariance');
const Math = require("mathjs");
const Stats = require("stats-lib");
/**
 * @return {Array}
 */
function Correlation(values1, values2) {
    return Stats.corr(values1, values2);
    /*
    let sumVal1, sumVal2, sumVals, sumVal12, sumVal22;
    let min = Math.min(values1.length, values2.length),
        reduce = (x1, x) => {
            const y1 = values2[x];
            Sum(sumVal1, x1);
            Sum(sumVal2, y1);
            Sum( sumVals, (x1 * y1));
            Sum(sumVal12, (x1 * x1));
            Sum(sumVal22, (y1 * y1));
        };
    values1.forEach(reduce);
    return (min * sumVals - sumVal1 * sumVal2) / Math.sqrt((min * sumVal12 - sumVal1 * sumX) * (min * sumVal22 - sumVal2 * sumVal2));
*/

}

module.exports = Correlation;