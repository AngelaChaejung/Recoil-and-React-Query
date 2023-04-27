import { atom } from "recoil";

export const Atom = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: {
    name: "LeeCJ",
    age: 30,
  }, // default value (aka initial value)
});
// 파생상태로 관리 :: 상태만 관리 ..파생된 상태를 관리하면 멍청이임.
// 투두리스트 => 상태
// 한 일 목록 => 파생상태
