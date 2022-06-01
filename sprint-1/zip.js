const array = [
  { propOne: 135, propTwo: 25 },
  { propOne: 156, propThree: 15 }
];

let newObj = {};

array.forEach((item) => {
  newObj = {
    ...item,
    ...newObj,
  };
});

console.log(newObj)