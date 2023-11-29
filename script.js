console.log("test");

// const input = '39518025894009348176177748178875936978444418362638085019682007561173738605710808391781432106826309189862218192135292600619080189001380510212854851893689772';

// function generator(number){

//     const arr=[];

//     for(let i = 0; i<number.length-1; i++){
//         arr.push(number[i]+number[i+1])
//     }

//     let obj = {};
//   for (const pair of arr) {
//     if (obj[pair]) {
//       obj[pair] += 1;
//     } else {
//       obj[pair] = 1;
//     }
//   }

//   let maxCount = 0;
//   for (const pair in obj) {
//     if (obj[pair] > maxCount) {
//       maxCount = obj[pair];
//     }
//   }
//     const maxPairs = Object.keys(obj).filter((pair) => obj[pair] === maxCount);
//     return  `Poros: ${maxPairs} kartojasi ${maxCount}`;
//   }
//   console.log(generator(input));

// generator(input)

// const poros ={};

// for (let i=0; i<input.length-1; i++){
//     const nr = unpout[i] + input[i+1];
//     if(poros[nr]){
//         poros[nr]++;
//     }else{
//         poros[nr]=1
//     }
// }

// let maxKiekis = 0;
// for(const key in poros)
// {
//     if(poros[key] >maxKiekis){
//         maxKiekis=poros[key]
//     }
// }

// console.log("test")

// let para="laima"

//  console.log(para.slice(0,1).toUpperCase())
//  console.log(para.slice(1,para.length))

console.clear();

const farm = [
  "Cow",
  "Pig",
  "Chicken",
  "Dog",
  "Cat",
  "Cow",
  "Horse",
  "Sheep",
  "Goat",
  "Cow",
  "Duck",
  "Cat",
  "Turkey",
];

function howManyCow() {
  let count = 0;
  for (let i = 0; i < farm.length; i++) {
    if (farm[i] === "Cow") {
      count++;
    }
  }
  return count;
}

howManyCow();
console.log("cows", howManyCow(farm));

console.log("su filtru:", farm.filter((animal) => animal === "Cow").length);
console.log("-------------");
// let count = 0
// for(const animal of farm){
//     if(anmial ==="Cow"){
//         count2++
//     }
// }
// farm.forEach(animal => animal == "Cow" ? cowSum++ : null)

// farm.forEach(animal => animal =="Cow" && cowSum++)

const farm2 = [
  { name: "Cow", age: 5 },
  { name: "Pig", age: 3 },
  { name: "Chicken", age: 1 },
  { name: "Dog", age: 2 },
  { name: "Cat", age: 4 },
  { name: "Cow", age: 7 },
  { name: "Horse", age: 4 },
  { name: "Sheep", age: 6 },
  { name: "Goat", age: 3 },
  { name: "Cow", age: 2 },
  { name: "Duck", age: 1 },
  { name: "Cat", age: 2 },
  { name: "Turkey", age: 3 },
];

let CowsAgeSum = 0;
for (const animal of farm2) {
  if (animal.name === "Cow") {
    CowsAgeSum += animal.age;
  }
}
console.log("CowsAgeSum", CowsAgeSum);

const age = farm2.reduce((acc, curr) => curr.name === "Cow" ? acc += curr.age : acc += 0 , 0);
console.log(age);

let cowsAgeSum8 = 0;
farm2.forEach(animal => animal.name === "Cow" && (cowsAgeSum8 += animal.age));