const simpleRandom = require('./Population Sampling/SimpleRandomSample');
const systematic = require('./Population Sampling/SystematicSample');
const confidenceInterval = require('./Population Sampling/ConfidenceInterval');
const marginError = require('./Population Sampling/MarginError');
const cochran = require('./Population Sampling/Cochran');
const sampleSizeCI = require('./Population Sampling/SampleSizeCI');

class PopulationSamplingOperations{
    static SimpleRandom(elements,amount){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return simpleRandom(elements,amount);
    }

    static Systematic(elements,amount){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return systematic(elements, amount);
    }

    static ConfidenceInterval(elements, confidencePercentile){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return confidenceInterval(elements, confidencePercentile);
    }

    static MarginError(elements, confidencePercentile){
        if (!Array.isArray(elements)){
            throw new Error('a must be an Array');
        }
        else if (elements.length===0){
            throw new Error('a cannot be empty'); // Theoretically, it could be. But the project spec says no.
        }
        return marginError(elements, confidencePercentile);
    }

    static Cochran(precision, confidencePercent, proportion){
        return cochran(precision, confidencePercent, proportion);
    }

    static SampleSizeCI(confidencePercentile, width, popStdDev = null){
        return sampleSizeCI(confidencePercentile, width, popStdDev);
    }
}

module.exports = PopulationSamplingOperations;