export const authenticate = () => {
  console.log('user authenticated');
  return {
    type: 'AUTH',
    payload: true
  }
}
export const logOff = () => {
  console.log('user logged off');
  return {
    type: 'AUTH',
    payload: false
  }
}