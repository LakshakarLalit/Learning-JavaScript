// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);


const mynum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = mynum.filter( (num) => num>4)

const newNum = []

mynum.forEach( (num) => {
    if(num){
        newNum.push(num)
    }
})

console.log(newNum);