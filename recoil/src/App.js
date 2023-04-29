import "./App.css";
import { useRecoilState } from "recoil";
import { Atom } from "./recoil/Atom";
import CJ from "./component/CJ";
import Button from "./component/Button";
import { Todo } from "./recoil/Todo";

function App() {
  const [user, setUser] = useRecoilState(Atom);
  const [todo, setTodo] = useRecoilState(Todo);
  const doneHandler = () => {
    setTodo({ todoList: [{ title: "빨래하기", done: true }] });
  };
  const changeUser = () => {
    setUser({ name: "chulsu", age: 31 });
  };
  return (
    <div className="App">
      <CJ />
      <Button />
      <button onClick={changeUser}>바뀐다</button>
      <div>
        <h1>Todo List...</h1>
        {/* {todo.todoList?.map((e) => ( */}
        {/* <> */}
        <h3>{todo.todoList[0].title}</h3>
        <div>{todo.todoList[0].done === false ? <div>아직 진행중..</div> : <div>done!</div>}</div>
        <button onClick={doneHandler}>완료</button>
        <hr />
        {/* </> */}
        {/* ))} */}
        <br />
      </div>
    </div>
  );
}

export default App;
