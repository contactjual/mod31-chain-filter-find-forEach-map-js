// filter --- na match korle empty erray return korbe

const numbers = [3, 46, 6, 8];

const get6Upper = numbers.filter(h => h > 6);
console.log(get6Upper);

const even = numbers.filter(h => h %2 === 0);
console.log(even);