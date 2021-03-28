function Mode(values) {
    let modes = [], count = [], max = 0;
    for(let i = 0; i < values.length; i++){
        let n = values[i];
        count[n] = (count[n] || 0) + 1;
        if(count[n] > 0)
            max = count[n];
    }
    for (let i in count){
        if(count.hasOwnProperty(i)){
            if(count[i] === max)
                modes.push(Number(i));
        }
    }
    return modes; //returns the index of or the number from the array that repeats the most
}
module.exports = Mode;