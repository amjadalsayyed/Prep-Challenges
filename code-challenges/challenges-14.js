"use strict";

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
  // write your code here
  return str.slice(str.lastIndexOf(" ") + 1);
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
  // write your code here

  return str.split(" ").slice(-1).toString();
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
  // write your code here
  //   let arr = str.split(" ");
  //   let indexOfI = arr.indexOf("I");
  //   let indexOfam = arr.indexOf("am");
  //   let indexOfwas = arr.indexOf("was");
  //   if (indexOfI >= 0) {
  //     arr.splice(indexOfI, 1, "We");
  //   }
  //   if (indexOfam >= 0) {
  //     arr.splice(indexOfam, 1, "are");
  //   }
  //   if (indexOfwas >= 0) {
  //     arr.splice(indexOfwas, 1, "were");
  //   }
  //   return arr.join(" ");

  return str
    .replaceAll("I", "We")
    .replaceAll("am", "are")
    .replaceAll("was", "were"); // THE SOLUTION USING INDEXOF AND SPLICE IS COMMENTED ABOVE IT WORKS BUT I DIDNT LIKE IT :(
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words

// Input:["move","it","away","from","the","street"]
// Output: "move it away from the, street"
//

const arrToStr = (arr) => {
  // write your code here

  return arr
    .map((e, n) => {
      if (n % 5 === 4) {
        e = `${e},`;
      }
      return e;
    })
    .join(" ");
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
  // write your code here
  // WILL SOLVE IT LATER :)
};
// -------------------------------------------------------------------------------------------------------

module.exports = {
  LastWord,
  LastWord_2,
  replaceWords,
  arrToStr,
  letterCounter,
};

//  const obj = str.split('').reduce((acc, cur) => {
// //     if (!acc[cur]) {
// //       acc[cur] = 1;
// //     } else {
// //       acc[cur] += 1;
// //     }
// //     return acc;
// //   }, {});
