import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); // 현재 로딩 중인지 아닌지를 나타내는 상태 변수 (초기값: true)
  const [movies, setMovies] = useState([]); // // 영화 데이터를 저장할 상태
  useEffect(() => {
    // 컴포넌트가 처음 화면에 나타날 때 실행됨, [] : 의존성 배열이 비어 있으므로 처음 한 번만 실행됨
    // 해당 URL로 HTTP 요청
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
      .then((response) => response.json()) // 응답(response)을 JSON 형식으로 변환
      // .then((json) => console.log(json)); // 파싱된 JSON 데이터를 콘솔에 출력
      .then((json) => {
        setMovies(json.data.movies); // setMovies를 사용해 movies 상태 변수에 배열을 저장
        setLoading(false); // 로딩을 끝냈기 때문에, 상태값 false
      });
  }, []);
  console.log(movies);
  return <div>{loading ? <h1>loading..</h1> : null}</div>;
}

export default App;
