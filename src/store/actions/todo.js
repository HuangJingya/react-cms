import { TODO_ADD, TODO_DEL, TODO_UPD, TODO_CL } from "../actionType";

export function addTodo(payload) {
  return {
    type: TODO_ADD,
    payload,
  };
}
//删除正在进行
export function delTodo1(payload) {
  return {
    type: TODO_DEL,
    payload,
  };
}
//删除已经完成
export function delTodo2(payload) {
  return {
    type: TODO_DEL,
    payload,
  };
}
//就是将正在进行的数据改成已经完成的数据列表中
export function updateTodo1(payload) {
  return {
    type: TODO_UPD,
    payload,
  };
}
//将已经完成的数据改成正在进行
export function updateTodo2(payload) {
  return {
    type: TODO_UPD,
    payload,
  };
}
export function clTodo(payload) {
  return {
    type: TODO_CL,
    payload,
  };
}
