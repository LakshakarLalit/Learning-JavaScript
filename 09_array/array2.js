const marverHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marverHeros.push(dcHeros);
// console.log(marverHeros);
// console.log(marverHeros[3]);

// const allHeros = marverHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeors = [...marverHeros, ...dcHeros];
console.log(allNewHeors);

const arr1 = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]];
const arr2 = arr1.flat(Infinity);
console.log(arr2);

