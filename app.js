//Rest & Spread Operator Exercises

//Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

//Refactor it to use the rest operator & an arrow function

const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

//findMin
//Write a function called findMin that accepts a variable number of arguments and return the smallest argument. Make sure to do this using the rest and spread operator.

const findMin = (...args) => Math.min(...args);

//mergeObjects
//Write a function called mergeObjects that accepts two objects and returns a new opject which contains all the keys and values of the first and second object.

const mergeObjects = (objOne, objTwo) => ({ ...objOne, ...objTwo });

//doubleAndReturnArgs
//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the ariginal array values and all of the addition arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

//Silce and Dice!
//For this section, write the following functions using rest, spread, and refactor these functions to be arrow functions. Make sure that you are alwasy returing a new array or object and not modifying the existing inputs.

//Remove a random element in the items array and retrun a new array with out that item.
//function removeRandom(items)

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

//Return a new array with every item in array1 and array2.
//function extend(arr1, arr2)

const extend = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

//Return a new object with all the keys and values from obj and a new key/value pair
//funciton addKeyVal(obj, key, val)

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

//Return a new object with a key removed
//function removeKey(obj, key)

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

//Combine two objects and return a new obj
//funciton combine(obj1, obj2)

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//Return a new object with a modified key and value
//function update(obj, key, val)

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
