import { CHANGE_MSG, TIME_MSG, CNODE_LIST } from "../actionType";
let initState = {
  msg: "2s is a footer",
  msg2: "2020/7/25",
  list: [],
  cnodelist: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_MSG:
      console.log("收到了", action);
      //深复制的原因
      let newState = JSON.parse(JSON.stringify(state));
      newState.msg = action.payload;
      return newState;
    case TIME_MSG:
      let newState1 = JSON.parse(JSON.stringify(state));
      newState1.msg2 = action.payload;
      return newState1;
    case CNODE_LIST:
      return { ...state, ...{ cnodelist: action.payload } };
    // newState.cnodelist.push(action.payload);
    // return newState;
    default:
      return state;
  }
}
