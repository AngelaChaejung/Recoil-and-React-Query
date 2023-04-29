import { atom } from "recoil";

export const Todo = atom({
  key: "todoList", // unique ID (with respect to other atoms/selectors)
  default: {
    todoList: [{ title: "빨래하기", done: false }],
  }, // default value (aka initial value)
});
