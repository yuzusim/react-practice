import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value); // 입력된 값을 상태로 업데이트
  // console.log("i run all the time");

  useEffect(() => {
    console.log("i run only once"); // 나는 한번만 실행 되요
  }, []); // 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유

  useEffect(() => {
    console.log("i run 'keyword' changes."); // 나는 키워드가 변화할 때 실행되요
  }, [keyword]); // keyword가 변화할 때 마다 코드가 항상실행

  useEffect(() => {
    console.log("i run 'counter' changes."); // 나는 카운터가 변화할 때 실행되요
  }, [counter]);

  useEffect(() => {
    console.log("i run keyword & counter changes."); // 나는 키워드, 카운터 중 하나라도 변화할 때 실행되요
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
