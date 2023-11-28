console.log("test")

const input = '39518025894009348176177748178875936978444418362638085019682007561173738605710808391781432106826309189862218192135292600619080189001380510212854851893689772';


function generator(number){
   
    const arr=[];
    for(let i = 0; i<number.length; i++){
        arr.push(number[i]+number[i+1])
    }
    let obj = {};
  for (const pair of arr) {
    if (obj[pair]) {
      obj[pair] += 1;
    } else {
      obj[pair] = 1;
    }
  }
  
  let maxCount = 0;
  for (const pair in obj) {
    if (obj[pair] > maxCount) {
      maxCount = obj[pair];
    }
  }
    const maxPairs = Object.keys(obj).filter((pair) => obj[pair] === maxCount);
    return  `Poros: ${maxPairs} kartojasi ${maxCount}`;
  }
  console.log(generator(input));




generator(input)

