export const INCRIMENT = value => ({
  type: 'counter/increment',
  payload: value,
});

export const DECREMENT = value => ({
  type: 'counter/decrement',
  payload: value,
});
