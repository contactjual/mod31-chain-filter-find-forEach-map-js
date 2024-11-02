const numbers = [3, 46, 6, 8];

// const dble = [];
// for (const num of numbers){
//     const double = num*2;
//     dble.push(double);
// }
// console.log(dble);



// do same by using map--------------------

// function doubleIt(num) {
//     console.log('now number', num);
//     return num * 2;
// }

// or 

// const doubleIt = (n) => n * 2;

// or 

// const result = numbers.map(doubleIt);

const result = numbers.map(n => n * 2); // protita upadan er jnno funtion ti alda vabe aply hobe and return korbe.
console.log(result);



