import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); // URL에서 id 값 꺼냄
  console.log(id);
  return <h1>Detail</h1>;
}

export default Detail;
