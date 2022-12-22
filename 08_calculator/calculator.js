const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(... nums) {
  console.log("Hona  Kekutanga",nums);
  let sum =0;
  let array = nums[0];
  
	array.forEach(element => {
    sum+=element;
  });
  console.log('Hona', sum)
  return sum;
};

const multiply = function(num1, num2) {
  return num1*num2;
};

const power = function() {
	
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
