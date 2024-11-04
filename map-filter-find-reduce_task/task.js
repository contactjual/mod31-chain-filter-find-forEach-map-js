// prob-1

const oddArray = [1, 3, 5, 7, 9];
// const getEvenArray = (oddArray) => {
//     const usingMap = oddArray.map(num => num +1);
//     return usingMap;
// }
// console.log(getEvenArray(oddArray))

const getEvenArray = oddArray.map(num => num + 1);
console.log(getEvenArray)





// prob-2

const myArray = [33, 50, 79, 78, 90, 101, 30];
const getDivisibleBy_10 = myArray.filter(num => num % 10 === 0);
console.log(getDivisibleBy_10);

// or 

const getDivisibleBy10 = myArray.find(num => num % 10 === 0);
console.log(getDivisibleBy10);




// prob-3

const instuctor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Sgobuj', age: 30, position: 'Senior' }
];
// console.log(instuctor[0].position)
// const getSenior1 = instuctor.filter(instuctor => instuctor.position === 'Senior')
// console.log(getSenior1)

const getSenior = instuctor.filter(instuctor => instuctor.position === 'Senior').map(instuctor => instuctor.name);
console.log(getSenior);




// prob-4

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchita', age: 22 }
];
// console.log(people[0].age);
const sumArray = people.reduce((preSum, current) => preSum + current.age, 0);
console.log(sumArray);