import { atom } from "recoil";

export const Todo = atom({
  key: "todoList", // unique ID (with respect to other atoms/selectors)
  default: {
    todoList: [
      { id: 1, title: "빨래하기", done: false },
      { id: 2, title: "청소하기", done: false },
    ],
  }, // default value (aka initial value)
});
