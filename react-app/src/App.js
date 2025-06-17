import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function Hello() {
  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created :)"); // 컴포넌트 생성 시 실행
  //   return byFn; // 컴포넌트 제거 시 실행할 함수 반환
  // }

  // 화살표 함수(람다식) 사용
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye :(");
  }, []);

  // 일반 함수(function 키워드) 사용
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
