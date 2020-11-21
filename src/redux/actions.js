import { ADD_LINE, ADD_BAR } from "./actionTypes";

let nextTodoId = 0;

export const addline = content => ({
  type: ADD_LINE,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const addbar = content => ({
  type: ADD_BAR,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const addroom = content => ({
  type: ADD_BAR,
  payload: {
    id: ++nextTodoId,
    content
  }
});
