import { CHANGE_MSG, TIME_MSG, CNODE_LIST } from "../actionType";
import { getCnodeList } from "../../utils/api";

export function changeMsg(payload) {
  return {
    type: CHANGE_MSG,
    payload,
  };
}

export function changeTim(payload) {
  return {
    type: TIME_MSG,
    payload,
  };
}

//用状态管理调接口
export function cnode(params) {
  return function (dispatch) {
    getCnodeList(params)
      .then((res) => {
        dispatch({
          type: CNODE_LIST,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: CNODE_LIST,
          payload: "",
        });
      });
  };
}
