import "./App.css";
import { useRecoilState } from "recoil";
import { Atom } from "./recoil/Atom";
import CJ from "./component/CJ";
import Button from "./component/Button";
import { Todo } from "./recoil/Todo";

function App() {
  const [user, setUser] = useRecoilState(Atom);
  const [todo, setTodo] = useRecoilState(Todo);
  const doneHandler = (id) => {
    setTodo((prev) => {
      // 기존의 값을 유지, 내가 클릭한 아이의 id 를 찾는다.
      // a의 done을 true로 바꾼다.
      const a = [...prev.todoList.map((el) => (el.id === id ? { ...el, done: !el.done } : { ...el }))];

      console.log(a);
      return { todoList: a };
    });
  };
  const changeUser = () => {
    setUser({ name: "chulsu", age: 31 });
  };
  console.log(todo);
  return (
    <div className="App">
      <CJ />
      <Button />
      <button onClick={changeUser}>바뀐다</button>
      <div>
        <h1>Todo List...</h1>
        {todo.todoList?.map((e) => (
          <div key={e.title}>
            <h3>{e.title}</h3>
            <div>{e.done === false ? <div>아직 진행중..</div> : <div>done!</div>}</div>
            <button onClick={() => doneHandler(e.id)}>완료</button>
            <hr />
          </div>
        ))}
        <br />
      </div>
    </div>
  );
}

export default App;
