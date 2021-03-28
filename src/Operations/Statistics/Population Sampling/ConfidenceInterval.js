const jstat = require('jstat');

function Mean(elements){ //TEMPORARY mean function until group's is done! (AKA Untested!!)
    let sum = 0;
    elements.forEach(function (number){
        sum += number;
    })
    return sum/elements.length;
}

module.exports = function ConfidenceInterval(elements, confidencePercentile){
    let mean = Mean(elements);
    return jstat.normalci(mean, 1-confidencePercentile, elements);
};