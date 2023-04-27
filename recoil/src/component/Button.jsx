import React from "react";
import { useSetRecoilState } from "recoil";
import { Atom } from "../recoil/Atom";

const Button = () => {
  const setChange = useSetRecoilState(Atom);
  const changeUser = () => {
    setChange({ name: "바보", age: 30 });
  };
  return <button onClick={changeUser}>바뀐다2</button>;
};

export default Button;
