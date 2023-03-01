"use strict";

// Important Note:
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given an array of objects, count the objects by using reduce method.

// Input:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// Output: 5

const objectCounter = (arr) => {
  // write your code here
  return arr.reduce((acc, curr) => (acc += 1), 0);
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass'
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
  return str
    .split(" ")
    .reduce((acc, curr) => (acc = curr + " " + acc), "")
    .trim();
  // write your code here
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

// const statistics = (a) => {
//   let obj = {};

//   for (var i = 0; i < a.length; i++) {
//     if (!obj[a[i].votes_To]) {
//       obj[a[i].votes_To] = 1;
//     } else {
//       obj[a[i].votes_To]++;
//     }
//   }
//   return obj;
// };

const statistics = (arr) => {
  // write your code here

  return arr.reduce((acc, curr) => {
    if (!acc[curr.votes_To]) {
      acc[curr.votes_To] = 1;
    } else {
      acc[curr.votes_To] += 1;
    }
    return acc;
  }, {});
};

// -------------------------------------------------------------------------------------------------------

module.exports = { objectCounter, stringReverse, statistics };
