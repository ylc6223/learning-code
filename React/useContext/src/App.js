import "./styles.css";
import { createContext, useState, useContext } from "react";
const Ctx = createContext();
import Second from "./second";

export default function App() {
  const [title, setTitle] = useState("hello world");
  const { visible, setVisiable, toggle } = useToggle();
  // const [visible, setVisiable] = useState(true);
  // const toggle = () => {
  //   setVisiable(!visible);
  // };
  return (
    <Ctx.Provider value={title}>
      <div className="App">
        <button onClick={toggle}>toggle</button>
        <Second />
        {visible && <Third />}
      </div>
    </Ctx.Provider>
  );
}
//自定义hooks
function useToggle() {
  const [visible, setVisiable] = useState(true);
  const toggle = () => {
    setVisiable(!visible);
  };
  return {
    visible,
    toggle,
  };
}

function Third() {
  const parentCtx = useContext(Ctx);
  return <div className="third">第三级{parentCtx}</div>;
}
