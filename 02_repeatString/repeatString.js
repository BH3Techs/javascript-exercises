const repeatString = function repeatString(str,num)  {
    let ans ='';
    if(num>=0){
        for(let i=0; i<num;i++){
            ans+=str;
        }
    }else{
        ans='ERROR';
    }
    
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
