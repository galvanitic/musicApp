export const authenticate = () => {
  console.log('user authenticated');
  return {
    type: 'USER_AUTHENTICATED',
    payload: Boolean
  }
}