import React from "react";
import { useRecoilValue } from "recoil";
import { Atom } from "../recoil/Atom";

const CJ = () => {
  const { name } = useRecoilValue(Atom);
  return <div>{name}</div>;
};

export default CJ;
