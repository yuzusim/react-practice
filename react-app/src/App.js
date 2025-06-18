import { useState } from "react";

// input 생성 사용자 입력을 받음
// useState("")를 사용해 toDo 상태를 빈 문자열로 초기화
// value={toDo}로 상태값을 input에 바인딩해서, 상태가 변할 때 input 내용도 반영
// onChange 이벤트 생성, <input onChange={onChange} />를 통해 사용자가 입력할 때마다 이벤트가 발생
// const onChange = (event) => setToDo(event.target.value);는 입력한 값을 toDo 상태로 업데이트

function App() {
  const [toDo, setToDo] = useState(""); // 입력값을 위한 상태
  const [toDos, setToDos] = useState([]); // 여러 개의 할 일 목록을 저장하는 상태
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 폼 제출을 막기
    if (toDo === "") {
      return; // 아무것도 안했으면 중단
    }
    setToDo(""); // 할 일을 입력한 후 input을 다시 비움 (초기화)
  };
  console.log(toDos); // toDos arry 확인

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={toDo}
          placeholder="Write your to do..."
        />
        <button>Add TO DO</button>
      </form>
    </div>
  );
}

export default App;
