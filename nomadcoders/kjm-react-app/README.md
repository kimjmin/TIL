## 7. Practice Movie App
- 배열 선언. 배열에 계속 값 추가. `...배열` : `[a, b, c] => a, b, c` 로 변환
```javascript
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const changeToDo = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){ return; }
    setToDos((curArray) => [toDo, ...curArray] );  // ...[] : 배열 안에 엘리먼트들 입력
    setToDo("");
  }
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" placeholder="write ToDo" onChange={changeToDo}></input>
        <button>Add to do</button>
      </form>
    </div>
  );
}
```
- `.map()` 각 배열값을 실행하는 함수. 결과를 새로운 배열로 리턴함. 배열 길이만큼 반복 실행
```javascript
['a','b','c'].map((item) => { return item.toUpperCase();} )
// --> ['A', 'B', 'C']
```
- `.map( (값, 순번) )` : React 에서는 `<li>` 사용하려면 `key` 인자 줘야 함. 안주면 오류.
```javascript
{toDos.map((item, index) => <li key={index}>{item}</li>)}
```
- 7.2 Coint Tracker : 코인 정보를 가져오고 로딩중에 로딩 메시지 보이기.
```javascript
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => { 
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
      setCoins(json); // 코인 정보 배열에 저장
      setLoading(false);  // loading 표시 중지
    });
  }, []);
  return (
    <div>
      <h1>Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <hr/>
      <ul>{coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) = {coin.quotes.USD.price} USD</li>)}</ul>
    </div>
  );
}
```
- 7.3 영화 정보 (https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year)
  - `fetch` 말고 `async-await` 사용
```javascript
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // fetch().then() 말고 async-await 사용 가능
  const getMovies = async() => {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (<h1>Loading...</h1>) : (
        <div>
          {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul> {movie.genres.map((g) => <li key={g}>{g}</li>)} </ul>
          </div>
          ))}
        </div>
      )}
    </div>
  )
}
```
- `Movie.js` 파일로 분할함 
```javascript
// Movies.js
import PropTypes from "prop-types";
function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

// App.js
import Movie from "./Movie";
...
return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((mov) => (
            <Movie
              key={mov.id}
              id={mov.id}
              coverImage={mov.medium_cover_image}
              title={mov.title}
              summary={mov.summary}
              genres={mov.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
```
- Route : 다른 화면, 뷰, 경로 등으로 구분하는 영역.
  - Route 폴더 만들어서 App() 내용 => Home() 으로 옮김. 
  - App() 은 다른 컴포넌트를 랜더링 하도록 수정.
  - App() : React Router DOM 사용
  - Brouse Router v6 에서 달라짐 : https://reactrouter.com/en/main/components/routes
```javascript
// npm i react-router-dom 먼저 설치해야 함
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// Route 안에 path 경로 작성. V6 버전부터 Switch 아니라 Routes 로 바뀌고 element 로 연결해야 함.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
export default App;
```
- 페이지 전체 그리지 않도록 `<a href>` 대신 `<Link to="/">` 사용해야 함.
```javascript
import { Link } from "react-router-dom";  // Link 임포트
function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
```
- router 로 부터 값 전달받기 : `useParams`
```javascript
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //ToDo : json 을 state 안에 넣어주고 return 에서 그려주기
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return <h1>Details</h1>;
};
export default Detail;
```
- 7.6 publishing : github page 에 배포하기 : `gh-pages` 패키지 설치
```sh
npm i gh-pages
```
- `npm run build` 명령으로 static webpage 빌드.
- `build` 디렉토리 안에 빌드된 페이지 생성됨.

```json
// package.json 에 추가
  "scripts": {
    ...
    "deploy": "gh-pages -d build", //build 디렉토리 안에 있는 내용 업로드
    "predeploy": "npm run build"  //npm deploy 명령 실행하면 static webpage 빌드 명령 먼저 실행함.
  }
  },
  "homepage" : "https://kimjmin.github.io/kjm-react-app
}
```
- summary 값이 250 이상이면 250 까지만 보이게 설정: `.slice()` 사용
```javascript
<p>{summary.length > 250 ? `${summary.slice(0, 250)}` : summary}</p>
```
- Breaing Changes : 버전업에 맞춰 코드를 바꿔야 하는 경우를 이야기함.
- 

