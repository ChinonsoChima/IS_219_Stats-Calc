const Math = require("mathjs");
const Mean = require('./Mean');
const Sum = require('../Sum');
const Difference = require('../Difference');
const StandardDeviation = require("./StandardDeviation");
const Stats = require("stats-lib");

function ZScore(values) {
    return Stats.zScore(values);
}
module.exports = ZScore;