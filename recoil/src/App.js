import logo from "./logo.svg";
import "./App.css";
import { useRecoilState } from "recoil";
import { Atom } from "./recoil/Atom";
import CJ from "./component/CJ";
import Button from "./component/Button";

function App() {
  const [user, setUser] = useRecoilState(Atom);

  const changeUser = () => {
    setUser({ name: "chulsu", age: 31 });
  };
  return (
    <div className="App">
      <CJ />
      <Button />
      <button onClick={changeUser}>바뀐다</button>
    </div>
  );
}

export default App;
