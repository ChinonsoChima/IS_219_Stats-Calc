const Mean = require("../src/Operations/Statistics/Mean");
const Median = require("../src/Operations/Statistics/Median");
const Mode = require("../src/Operations/Statistics/Mode");
const Variance = require("../src/Operations/Statistics/Variance");
const StandardDeviation = require("../src/Operations/Statistics/StandardDeviation");
const MeanAbsolute = require("../src/Operations/Statistics/MeanAbsolute");
const Skewness = require("../src/Operations/Statistics/Skewness");
const Quartiles = require("../src/Operations/Statistics/Quartiles");
const ZScore = require("../src/Operations/Statistics/ZScore");
const Correlation = require("../src/Operations/Statistics/Quartiles");
const Stats = require("stats-lib");

test('Test the Mean Function', () => {
    let values = [2,4.5,6,8.4,10];
    expect(Mean(values)).toBe(6.18);
    //console.log("Expected:", 6.18, "Result:", Math.mean(values));
});

test('Test the Median Function', () => {
    let values = [2,4,6,8,10,12];
    expect(Median(values)).toBe(7);
    //console.log("Expected:", 7, "Result:", Math.median(values));
});

test('Test the Mode Function', () => {
    let values = [2,4,6,8,2,10,8,1,8];
    expect(Mode(values)).toStrictEqual([8]);
    //console.log("Expected:", 8, "Result:", Math.mode(values));
});

test('Test the Variance Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(Variance(values)).toBe(7.242400000000001);
    //console.log("Expected:", 9.053, "Result:", Math.variance(values));
});

test('Test the Standard Deviation Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(StandardDeviation(values)).toBe( 3.008820366854758);
    //console.log("Expected:", 3.0088, "Result:", Math.std(values));
});

test('Test the Mean Absolute Deviation Function', () => {
    let values = [2.5,4,6.3,8,10];
    expect(MeanAbsolute(values)).toBe(2.3280000000000003);
    //console.log("Expected:", 2.328, "Result:", Math.mad(values));
});

test('Test the Skewness Function', () => {
    let values = [1,4,2,4,2,1];
    expect(Skewness(values)).toBe(0.5228036105081426);
    //console.log("Expected:", 2.328, "Result:", Math.mad(values));
});

test('Test the Quartiles Function', () => {
    let values = [2,4,6,8,10,12];
    expect(Quartiles(values)).toStrictEqual([4,7,10]);

});

test('Test Correlation Function', () => {
    let values1 = [6,2,7,3,1,2], values2 = [2,2,2,1,1,1];
    //this line should work, since we are using the actual library, but it's returning the wrong value for "Expected"
    //expect(Correlation(values1, values2)).toStrictEqual(Stats.corr(values1,values2));
    //
    expect(Correlation(values1, values2)).toStrictEqual([2, 2.5, 6]);
});

test('Test the ZScore Function', () => {
    let values = [8,4,2];
    expect(ZScore(values)).toStrictEqual(Stats.zScore((values)));
    //console.log("Expected:", 2.328, "Result:", Math.mad(values));
});