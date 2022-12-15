const reverseString = function reverseString(str) {
    let revStr = '';
    for(let i = 0; i<=str.length;i++){
        revStr += str.charAt(str.length-i)
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
