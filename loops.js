
const makeArray = (array) => {
  const array=[]
  const t = Math.floor(Math.random() * 10)
  for (let i=0; i<25; i++) {
    array.push("I am ${i} strange loop${i=== 0 ? '' : 's'} .");
  }
}
