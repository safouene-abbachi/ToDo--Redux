import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  SAVE_EDIT,
  EDIT_INPUT_HANDLER,
  EDIT_HANDLER,
  CHANGE_HANDLER
} from "./actionType";

export const changeHandler = payload => {
  return { type: CHANGE_HANDLER, payload };
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const deleteTodo = payload => {
  return {
    type: REMOVE_TODO,
    payload
  };
};

export const completeToDo = index => {
  return {
    type: COMPLETE_TODO,
    index
  };
};

export const editinputHandler = payload => {
  return { type: EDIT_INPUT_HANDLER, payload };
};

export const editHandler = index => {
  return { type: EDIT_HANDLER, index };
};

export const cancelEdit = () => {
  return { type: EDIT_INPUT_HANDLER };
};

export const saveEdit = () => {
  return { type: SAVE_EDIT };
};
