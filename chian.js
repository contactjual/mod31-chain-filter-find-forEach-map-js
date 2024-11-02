const data = [{
    id: 1,
    name: 'abul',
    address: 'kichu ekta'
}];
// console.log(data.address); // wrong 

console.log(data[0].address)





const user = {
    id: 3400,
    name: 'djkfjif',
    address: {
        street: {
            first: 'dioer',
            second: 'jieor',
            third: 'dkfei',
        },
    },
    city: 'dfoej'
}
console.log(user.address.street.second);




const user2 = {
    id: 3400,
    name: 'djkfjif',
    street: {
        first: 'dioer',
        second: 'jieor',
        third: 'dkfei',
    },
    city: 'dfoej'
}
console.log(user2.address?.street.second);