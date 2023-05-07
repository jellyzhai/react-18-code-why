import { ADD_NUM, MINUS_NUM } from "./constants";

export const addAction = (num) => ({
  type: ADD_NUM,
  num,
});

export const minusAction = (num) => ({
  type: MINUS_NUM,
  num,
});
