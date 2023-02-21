// function upperCaser(input) {
//   return (input = input.toUpperCase());
// }
// console.log(upperCaser("hello world"));
// module.exports = upperCaser;

// function repeat(operation, num) {
//   while (num > 0) {
//     return repeat(operation, --num);
//   }
// }
// module.exports = repeat;

// function doubleAll(numbers) {
//   return numbers.map((el) => {
//     return el * 2;
//   });
// }
// module.exports = doubleAll;

// function getShortMessages(messages) {
//   return messages
//     .filter((object) => object.message.length < 50)
//     .map((line) => {
//       return line.message;
//     });
// }
// module.exports = getShortMessages;

// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every((submittedUser) => {
//       return goodUsers.some((goodUser) => {
//         return goodUser.id === submittedUser.id;
//       });
//     });
//   };
// }
// module.exports = checkUsersValid;

// function countWords(inputWords) {
//   return inputWords.reduce(function (count, word) {
//     count[word] = ++count[word] || 1;
//     return count;
//   }, {});
// }
// module.exports = countWords;

// function duckCount() {
//   return Array.prototype.slice.call(arguments).filter(function (obj) {
//     return Object.prototype.hasOwnProperty.call(obj, "quack");
//   }).length;
// }

// module.exports = duckCount;

var slice = Array.prototype.slice;

function logger(namespace) {
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
    console.log(arguments);
  };
}

const input = logger("INFO:");
input("this is a warning message", "with more info");
module.exports = logger;
