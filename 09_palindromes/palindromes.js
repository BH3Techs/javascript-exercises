const palindromes = function (string) {
    let array = string.split('');
    let reversedarray = array.reverse();
    let newstring = reversedarray.join('');

    console.log(string);
    console.log(newstring);
    return newstring == string;
};

// Do not edit below this line
module.exports = palindromes;
