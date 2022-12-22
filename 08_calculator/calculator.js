const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(... nums) {
  let sum =0;
  let array = nums[0];
  
	array.forEach(element => {
    sum+=element;
  });
  return sum;
};

const multiply = function(... nums) {
  let ans =1;
  let array = nums[0];

  array.forEach(element =>{
    ans*=element;

  });
  return ans;
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
