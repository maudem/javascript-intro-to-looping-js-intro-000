
const forLoop = (array) => {
  // const array=[]

  for (let i=0; i<25; i++) {
    array.push("I am ${i} strange loop${i=== 0 ? '' : 's'} .");
    return array
  }
}

forLoop();
