const repeatString = function(string, timesToRepeat) {
    if (timesToRepeat < 0)
        return 'ERROR';
    let res = '';
    for (let i = 0; i < timesToRepeat; i++)
        res += string;
    return res;
};

// Do not edit below this line
module.exports = repeatString;
