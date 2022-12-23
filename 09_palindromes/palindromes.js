const palindromes = function (string) {
    let symbs = '';
    let array = string.split('');
    if(array.includes('!')){
        array = array.filter(x => !x.includes('!'));
        symbs ='!';
    }
    let reversedarray = array.reverse();
    let newstring = reversedarray.join('');
    newstring +=symbs;

    console.log(string);
    console.log(newstring);
    return newstring == string;
};

// Do not edit below this line
module.exports = palindromes;
