// array

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);// here 0 -> is the index of first element


// array methods

// myArr.push(6);
// myArr.push(7);// add new elemnt to the array at the last
// myArr.pop();// remmove an element from the last of an array

// myArr.unshift(9);// add new element to the begining of the array
// myArr.shift();// remove an element from the begining of the array



// console.log(myArr.includes(9)); // to check weather 9 is present in my array
// console.log(myArr.indexOf(9)); // tell the index of an element in an array


// const newArr = myArr.join()// to copy an array
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice


console.log("A", myArr)
const myn1 = myArr.slice(1, 3);// the range starts from the first number and don't include the second number and it will not change the original value

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 3);// the range will start from the first number and it will include the second number, but it will change the original value (it cut out the value)
console.log("C", myArr)
console.log(myn2);