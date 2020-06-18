// Question 1
const q1arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const arraySort = (arr) => {
  //sort array
  let sortedArr = arr.sort((a, b) => a - b);
  let res = [];
  let temp = [];

  for (i = 0; i < sortedArr.length; i++) {
    if (i === 0 || sortedArr[i] === sortedArr[i - 1]) {
      // add the first number and the same number to the temp
      temp.push(sortedArr[i]);
    } else {
      // add the finished temp array to the final array
      res.push(temp);
      // clean the tmep array
      temp = [];
      // put the current number in to the temp array
      temp.push(sortedArr[i]);
    }
  }
  return res;
};
console.log("The Q1 answer is :");
console.log(arraySort(q1arr));
console.log("-----------------------------------------");

//Question 1 (Bonus)
const q1arr2 = [1, "2", "3", 2];

const typeSort = (arr) => {
  //sort type
  let numArray = [];
  let strArray = [];
  let res = [];

  for (i of arr) {
    if (typeof i === "number") {
      numArray.push(i); // push number type in numArray
    } else if (typeof i === "string") {
      strArray.push(i); // push string type in strArray
    }
  }
  res.push(numArray, strArray);
  return res;
};
console.log("The Q1 Bonus answer is :");
console.log(typeSort(q1arr2));
console.log("-----------------------------------------");