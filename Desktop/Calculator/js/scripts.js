var add = function(number1 , number2) {
return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var bmi = function(weight, height) {
return ((weight / height/ height) * 10000);
};
 var weight = parseInt(prompt("enter your weight in kg:"));
 var height = parseInt (prompt("enter your height in meters:"));
var result = (bmi(weight, height));
var outputText = "Your bmi is " + result + ".";
saySomething(outputText);


var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var convert= function(fahrenheit) {
return ((fahrenheit- 32) / 1.8);
};
 var fahrenheit = parseInt(prompt("enter degrees in fahrenheit"));

var result = (convert(fahrenheit));
var outputText = "in Celsius is " + result + ".";
saySomething (outputText);
