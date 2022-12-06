/* eslint-disable import/prefer-default-export */
import { rand } from './clock-functions';

const generateNums = (limit) => {
  const arr = [];

  for (let i = 0; i < limit; i += 1) {
    arr.push(rand(0, 9));
  }
  return arr;
};

export { generateNums };
