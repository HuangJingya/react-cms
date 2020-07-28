import { TODO_ADD, TODO_DEL, TODO_UPD, TODO_CL } from "../actionType";
let initState = {
  list: [], //未完成的工作列表
  list1: [], //已完成的工作列表
  up: "up",
};
// return { ...newState, ...{ list: newState.list.push(action.payload) } };
export default function reducer(state = initState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case TODO_ADD:
      newState.list.push(action.payload);
      return newState;
    case TODO_DEL:
      newState.list.map((ele, idx, arr) => {
        if (ele.id === action.payload) {
          arr.splice(idx, 1);
        }
        return false;
      });
      newState.list1.map((ele, idx, arr) => {
        if (ele.id === action.payload) {
          arr.splice(idx, 1);
        }
        return false;
      });
      return newState;

    case TODO_UPD:
      newState.list.map((ele, idx, arr) => {
        if (ele.id === action.payload) {
          newState.list1.push(arr.splice(idx, 1)[0]);
        }
        return false;
      });
      // newState.list1.map((ele, idx, arr) => {
      //   if (ele.id === action.payload) {
      //     newState.list.push(arr.splice(idx, 1)[0]);
      //   }
      //   return false;
      // });
      return newState;
    case TODO_CL:
      return newState;
    default:
      return newState;
  }
}
