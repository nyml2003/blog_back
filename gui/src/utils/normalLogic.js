
export function checkSame(data,dataCopy){
  return JSON.stringify(data) === JSON.stringify(dataCopy)
}
export function isNumber(value){
  return typeof value === 'number' && !isNaN(value)
}
