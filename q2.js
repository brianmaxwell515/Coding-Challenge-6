//Question 2

const arraySum = (arr, target) => {
  let res = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      // Find the sum of two numbers is equal to the target
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]); // If those tow numbers found, push it into res
      }
    }
  }
  return res;
}

const q2arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 10;

console.log("The Q2 answer is :");
console.log(arraySum(q2arr, target));
console.log("-----------------------------------------");