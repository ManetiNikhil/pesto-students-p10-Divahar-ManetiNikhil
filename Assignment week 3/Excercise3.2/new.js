//Call():call is a method used to invoke/call function with 'this(object or inside object properties, values') value with optional orguments.
//syntax: functionName.call(thisValue, arg1, arg2, ...);
//ex:
let fruitsandveg = {
  fruit: 'mango',
  vegitable: ' bringal',
  mix: function (beverage, city) {
    return this.fruit + ' ' + this.vegitable + ' ' + beverage + ' ' + city;
  },
};
fruitsandveg.mix();
let fruitsandveg2 = {
  fruit: 'Banana',
  vegitable: 'potato',
};
let fruitsandveg3 = {
  fruit: 'apple',
  vegitable: 'tomato',
};
console.log(fruitsandveg.mix.call(fruitsandveg2, 'Cococola', 'Hyderabad'));
console.log(fruitsandveg.mix.call(fruitsandveg3, 'Thumsup', 'Bangalore'));
//Apply(): Apply method is similar to call(), but it accepts an array of arguments instead of individual arguments or arguments are passed in the form array list. It has the following syntax:
//functionName.apply(thisValue, [arg1, arg2, ...]);
console.log(fruitsandveg.mix.apply(fruitsandveg, ['Sprite', 'Mumbai']));
//bind(): The bind method is used to create a new function that is bound to a specific 'this' value, which can be invoked/call later. It has the following syntax:
//const boundFunction = functionName.bind(thisValue, arg1, arg2, ...);
//ex:
let all = fruitsandveg.mix.bind(fruitsandveg2, 'Cococola', 'Kolkata');
console.log(all());
