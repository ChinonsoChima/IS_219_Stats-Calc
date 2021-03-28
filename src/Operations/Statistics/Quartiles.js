const math = require('mathjs');
const Stats = require('stats-lib');

function Quartiles(values) {

    //return [math.quantileSeq(values, 0.2), math.quantileSeq(values, 0.5), math.quantileSeq(values, 0.8)];
    //Or
    return Stats.quartile(values);
}
module.exports = Quartiles;