// const arr=[...Array(100000000).keys()]

// console.time("for")
// for(let i=0;i<arr.length;i++){

// }
// console.timeEnd("for")

// let j=0;
// console.time("while")
// while(j<arr.length){

// }
// console.timeEnd("while")

// let k=0;
// console.time("dowhile")
// do{

// }while(j<arr.length)
// console.timeEnd("dowhile")

const shivInfo={
    firstName:"Shiv",
    lastName:"Modi",
    age:21,
    gender:"Male"
}


const data={...shivInfo,fullName:`${shivInfo.firstName} ${shivInfo.lastName}`,profession:shivInfo.gender==="Male"?'Cricketor':'Actoress'}
const {age,...res}=data

console.log(data);

const arr=[1,2,3,4,5]
const index=2;
// const newArr=[
//     ...arr.slice(0,index),
//     8,
//     ...arr.slice(index)
// ]
// console.log(newArr);

const newArr=[
        ...arr.slice(0,index),
        ...arr.slice(index+1)
    ]
console.log(newArr);
    

