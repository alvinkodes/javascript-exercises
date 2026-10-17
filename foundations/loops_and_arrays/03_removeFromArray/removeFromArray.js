const removeFromArray = function(array, ...tobeRemoved) {
    return array.filter((e) => !tobeRemoved.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
