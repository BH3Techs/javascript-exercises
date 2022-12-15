const removeFromArray = function removeFromArray(arry, ...num) {
    return arry.filter(x => !num.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
