import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  SAVE_EDIT,
  EDIT_INPUT_HANDLER,
  EDIT_HANDLER,
  CHANGE_HANDLER,
  CANCEL_EDIT
} from "../actions/actionType";

const inialState = {
  task: "",
  tasklist: [],
  iscompleted: [],
  isedited: [],
  edittask: ""
};
const reducer = (state = inialState, action) => {
  switch (action.type) {
    case CHANGE_HANDLER:
      return { ...state, task: action.payload.target.value };

    case ADD_TODO:
      return state.task.trim() !== ""
        ? {
            ...state,
            task: "",
            tasklist: [...state.tasklist, state.task],
            iscompleted: [...state.iscompleted, false],
            isedited: [...state.isedited, false]
          }
        : { ...state };

    case COMPLETE_TODO:
      let arr1 = [...state.iscompleted];
      arr1[action.index] = !state.iscompleted[action.index];
      return { ...state, iscompleted: arr1 };

    case REMOVE_TODO:
      return {
        ...state,
        tasklist: state.tasklist.filter(
          (task, index) => index !== action.payload
        ),
        iscompleted: state.iscompleted.filter(
          (task, index) => index !== action.payload
        )
      };

    case EDIT_HANDLER:
      let arr2 = [...state.isedited];
      arr2[action.index] = true;
      return { ...state, isedited: arr2 };

    case EDIT_INPUT_HANDLER:
      return { ...state, edittask: action.payload.target.value };

    // case CANCEL_EDIT:
    //   return {
    //     ...state,
    //     edittask: "",
    //     isedited: state.isedited.map(e => (e = false))
    //   };

    case SAVE_EDIT:
      let arr3 = [...state.tasklist];
      state.edittask.trim() &&
        (arr3[state.isedited.indexOf(true)] = state.edittask);

      return {
        ...state,
        tasklist: arr3,
        edittask: "",
        isedited: state.isedited.map(e => (e = false))
      };
  }

  return state;
};

export default reducer;
