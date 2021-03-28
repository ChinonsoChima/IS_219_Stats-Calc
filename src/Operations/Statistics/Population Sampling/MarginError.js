const jstat = require('jstat');

module.exports = function MarginError(elements, confidencePercentile){
    let tScore = -jstat.studentt.inv((1-confidencePercentile)/2,elements.length-1);
    let sDev = jstat.stdev(elements);
    return tScore * (sDev/Math.sqrt(elements.length));
};