import Button from "./Button";
import styles from "./App.module.css";

import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value); // 입력된 값을 상태로 업데이트
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API");
  }, []); // 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEACH FOR", keyword);
    }
  }, [keyword]); // keyword가 변화할 때 마다 코드가 항상실행

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
