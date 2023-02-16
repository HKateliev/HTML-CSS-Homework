// let pow = (x, n) => {
//   n === 1 ? x : x * pow(x, n - 1);
// };
// console.log(pow(2, 4));

//async function / promises
async function f(error = flase) {
  return new Promise((resolve, reject) => {
    if (!error) setTimeout(() => resolve(new Date()), 1000);
    else reject(new Error("some error"));
  });
}
//f().then((date) => {console.log('date',date);})
