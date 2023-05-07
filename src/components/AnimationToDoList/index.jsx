import React, { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TopLineHOC from "../TopLineHOC";
import "./style.css";

function AnimationToDoList() {
  const [thing, setThing] = useState("");
  const [things, setThings] = useState([{ id: Date.now(), value: "体检" }]);
  const liRef = useRef();

  const handleOnkeyDown = (e) => {
    if (e.key === "Enter") {
      addThing();
    }
  };

  //   const addThing = () => {
  //     if (!thing) {
  //       return;
  //     }

  //     const newThing = {
  //       id: Date.now(),
  //       value: thing,
  //     };

  //     setThings([newThing, ...things]);
  //     setThing("");
  //   };

  const addThing = () => {
    if (!thing) {
      return;
    }

    const newThing = {
      id: Date.now(),
      value: thing,
    };
    setThings((prevThings) => [...prevThings, newThing]);
    setThing("");
  };

  const deleteThing = (id) => {
    const updatedThings = things.filter(item => item.id !== id);

    setThings(updatedThings);
  };

  return (
    <div>
      <h2>待办事项</h2>
      <input
        type="text"
        value={thing}
        onKeyDown={handleOnkeyDown}
        onChange={(e) => setThing(e.target.value)}
      />
      <button onClick={addThing}>创建事项</button>

      <TransitionGroup component={"ul"}>
        {things.map(item => (
          <CSSTransition
            nodeRef={liRef}
            key={item.id}
            timeout={1000}
            classNames="todo"
          >
            <li ref={liRef}>
              {item.value}{" "}
              <button onClick={() => deleteThing(item.id)}>删除</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TopLineHOC(AnimationToDoList);
