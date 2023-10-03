
export function checkSame(data,dataCopy){
  return JSON.stringify(data) === JSON.stringify(dataCopy)
}
export function isNumber(value){
  console.log('isNumber: ', value)
  console.log(typeof value)
  console.log(!isNaN(value))
  return typeof value === 'number' && !isNaN(value)
}
