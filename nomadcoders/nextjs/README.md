## 1. Create Project 
```sh
npx create-next-app@latest [--typescript]
Project name? > 
```
- 프로젝트로 이동해서 개발 모드 실행 
```
npm run dev
```

## Framework Overview
- `pages` 에서 `index.js` 생성
```javascript
export default function Home() {
  return "hi"
}
```
- Library vs Framework
  - Liberary 는 개발자가 자의대로 코드(파일)를 호출해서 씀
  - Framework 는 프레임워크가 규칙에 정해진 대로 코드(파일)를 호출해서 씀
  - NextJS 는 프레임워크 이기 때문에 정해진 규칙대로 해야 함.
- NextJS Framework 의 프로젝트 디렉토리
  - pages : {파일명}.js 으로 자동으로 라우팅 해줌 : `home.js` -> `127.0.0.1:3000/home`
    - 파일 이름이 중요함. 컴포넌트 이름은 상관 없음.
    - 예외 : `index.js` 는 루트로 라우팅.
  - public : 
  - styles : 
- jsx 사용할 때는 react 임포트 할 필요 없음.
- 크롬 -> 개발자도구 -> network 에서 slow 로딩 시뮬레이션 가능.
- 순수 React 로 만든 페이지 : 클라이언트 사이드 렌더링
- NoexJS : 서버 사이드 랜더링 가능.
  - rehydration : html 먼저 빌드 해 놓고 난 다음에 react.js 받아서 실행.

### routing
- components 폴더 안에 NavBar.js 생성
```javascript
// NavBar.js
export default function NavBar() {
  return (<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>)
}

// index.js
export default function Home() {
  return (
<div>
  <NavBar />
  <h1>Hello</h1>
</div>
  )
}
```
- 위와 같이 하면 ESLint 경고 : `<a>` 태그 쓰지 말것. 페이지 전체 리로드 됨
- `a` 대신 `Link` 사용. 안에 `<a>` 사용. Link 는 href 만 만들어줌. style, className 같은건 `<a>`안에 넣어줘야 함.
- Router : 현재 로케이션 값을 알려줌.
- 라우터 사용
```javascript
import { Link } from "next/link";
import { useRouter } from "next/router"
export default function NavBar() {
  const router = useRouter(); // 로케이션에 대한 정보
  return (
<nav>
  <Link href="/">
    <a style={{color : router.pathname === "/" ? "red" : "blue"}}>Home</a>
  </Link>
  <Link href="/about">
    <a style={{color : router.pathname === "/about" ? "red" : "blue"}}>About</a>
  </Link>
</nav>
  )
}
```
# 이것 저것 다 잘 안됨. 일단 강의 끝까지 듣고 도큐먼트 보면서 다시 만들어보는걸로.

### css, style
- 모듈 사용 : `{아무이름}.module.css` : 패턴 지켜야 함.
```javascript
// NavBar.module.css 파일
.nav {
  background-color: read;
}
.active {

}

NavBar.js
import styles from "./NavBar.module.css"
// styles 가 모듈이기 때문에 다음과 같이 사용
<nav className={styles.nav}>
<Link href="/about">
    <a className={router.pathname==="/about" ? styles.active : "" }>About</a>
  </Link>
```
- 빌드 될 때 모든 클래스명 등은 무작위로 바뀜
- 여러 클래스 적용하는 법
```javascript
// 백틱을 띄어주거나
<a className={`${styles.link} ${router.path...}`}> </a>
// 배열.join(공백) 해서 넣어주거나.
<a className={[
  styles.link,
  router.path...
  ].join(" ")}> </a>
```
- Styled JSX : 컴포넌트 별로 독립된 스타일 작성 가능. `jsx` 프롭 주고 백틱 안에서 써야함.
```javascript
<style jsx>{`
a {
  color: bllue;
}

.active {
  color: red;
}
`}</style>
```
- 빌드 될 때 무작위로 클래스명 바뀜
- 전역 스타일 설정 : `<style jsx global>` 다른 페이지 가면 스타일링 사라짐
- 아니면 pages 폴더 안에 `_app.js` 파일 만들어서 전역 설정. 무조건 이 이름.
```javascript
// _app.js
export default function App({Component, pageProps}) { //컴포넌트명 상관 없음.
  // 실행시 모든 컴포넌트들을 Component 에 넣어 _app.js 에게 반환.
  // _app.js 파일이 없다면 return(<Component {...pageProps} />) 만 자동으로 일어남.
  // 전역적인 커스터마이징을 하고 싶을 때 여기서 설정.
  return (
    <>
      <NavBar>
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
a {
  color: white;
}
      `}</style>
    </>
  )
} // 모든 페이지에서 NavBar, hello 메시지 가 보임. 전역 페이지에서 a 글자 흰색
```
- `global.css` 파일 다른곳에서는 로딩 못하는데 `_app.js` 에서는 로딩 가능

## 2. Project
- 자주 사용되는 패턴 : Layout :
```javascript
// Layout.js | children - _app.js 를 너무 크게 만들지 않기 위해 맨 바깥에 Layout 으로 감싸줌.
import NavBar from "./NavBar";

export default function Layout({children}) {
  return (
<>
  <NavBar />  
  <div>{children}</div>
</>
  )
}

// _app.js 
import Layout from "../components/Layout"
import "../styles/clogals.css"

export default function MyApp({component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```
- `head` : 타이틀바 같은 곳을 편집할 수 있는 제공되는 컴포넌트.
```javascript
import Head from "next/head";
export default function Seo({title}) {
  return (
  <Head>
    <title>{title} | Next Movies</title>
  </Head>
  );
}

// Home.js 에서는
return (
<div>
  <Seo title="home" />
  <h1>Hello</h1>
</div>
);
```
- `img` 대신 `Image` 태그 사용해야 함
- `await fetch(...).json()` 이후 데이터 가져온 후에만 데이터 매핑 하고 싶을 때.
```javascript
{!movies && <h4>Loading...</h4>}  // movies 안 가져왔으면 로딩 메시지 보여줌.
{movies?.map(movie) => (  // movies 가져오면 map 실행
  <div key={movie.id}>
    <h4>{movie.title}</h4>
  </div>
)}
```
- API Key 숨기기 : `redirect` 와 `rewrite` 사용
  - redirect : 정보 숨기지 않고 리다이렉팅. `next.config.js` 에서 설정. next.js 서버 재시작 해야 함.
```javascript
// next.config.js
module.exports = {
  reactStrictMode : true,
  async redirects(){
    return [
      {source : "/contact", destination: "/form", permanent: false} // contact 에 접속하면 form 으로 페이지 이동.
      {source : "/kjm", destination: "http://kimjmin.net", permanent: false} // 외부 페이지도 가능.
      {source : "/old/:path*", destination: "/new/:path*", permanent: false} // old 뒤에 오는 전체 패스를 new 뒤로 가능.
    ]
  }
}
```
  - rewrites : URL 바뀌지 않은 채 이동. API 키 숨기는데 유용
```javascript
const API_KEY = "apikeyanyonecansee";
  async rewrites (){
    return [{
      source : "/api/movies", 
      destination: `https://api.movie/3/list?api_key=${API_KEY}`,
       permanent: false
    }]
  }
// index.js 에서 fetch 를 "https://api..." 에서 "/api/movies" 로 변경
expirt default function Home() {
  const [moives, setMoives] = useState();
  useEffect(() => {
    (async () =>{
      const { results } = await (await fetch(`/api/movies`)).json();
      setMoveies(results);
    })();
  }, []);
}
```
  - API_KEY 를 외부 인자로 빼는 방법 `.env` 파일
```javascript
// next.config.js
API_KEY = process.env.API_KEY;

//.env 파일 : 반드시 .gitignore 에 없앨것.
API_KEY=2312314141241
```
#### Server Side Rendering 만 하기 `getServerSideProps`
```javascript
// index.js
export function Home({results}) { ... }

//함수명 반드시 지켜야 함. 나중에 클라이언트에서는 안보임
export async function getServerSideProps(){ // await 사용했기 때문에 async 지정함.
  // 여기서 쓰는 코드는 전부 서버에서 돌아감. rewrite 안쓰고 여기다가 써도 됨.
  // const { results } = await (await fetch(`/api/movies`)).json(); // /api/movies 는 오류남
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json(); // 실제 URL 써줘야 함.
  return {
    props : { results, }  // props 안에 들어가야 함.
  }
}
```
#### Dynamic Routes
- 기본적으로는 `pages/{경로}/{파일명}.js` 에 파일 넣어놓으면 `/경로/파일명` 으로 라우팅 자동 생김. `index.js` 하면 `/경로` 끝
- 값을 기반으로 URL 이동하려면 `/movies/[id].js` 라고 `[id].js` 파일 만듦. URL 값 기반으로 들어감.
```javascript
// [id].js
import { useRouter } from "next/router"
export default function Detail() {
  const router = useRouter();
  console.log(router);  // ojbect 안에 'id' 라는 키값 안에 경로 정보 들어감. [파일명].js 에서 준 값.
  return "detail";
}
```
- 각 영화 화면을 클릭하면 상세페이지로 가도록 `useRouter.push()`
```javascript
// index.js
import { useRouter } from "next/router"
export default function Home({results}) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/movies/${id}`);
  };
  return (
<div className="container">
  <Seo title="Home" />
  {results?.map((movie) => (
    <div onClick={() => onClick(movie.id)} className="movie">
      <img src={`https://image.tmdb.org...`} />
    </div>
  ))}
  );
}
```
- detail 페이지에서 새로 id 를 가지고 요청할수도 있지만, 이미지, 타이틀 등 미리 갖고 있는 값 넘겨주는것도 가능
```javascript
router.push(
{
  pathname: `/movies/${id}`,
  query : { 
    title : `${title}`    // /movies/aaa?title=스파이더맨 처럼 보임. 키랑 객체명 같으면 query { title } 만 해도 됨.
  },
  `/movies/${id}`   // 이렇게 하면 query 에 지정한 파라메터들 마스크 해서 안보이게 할 수 있음.
});
```
- 마스킹 했어도 값을 넘겨주기 때문에 전 페이지에서 안 가고 URL 주소 바로 치고 들어가면 내용 안보임
- `router.push()` 대신 `<Link>` 에서도 직접 사용 가능
```javascript
<Link href={{
  pathname: `/movies/${id}`,
  query : { title },
  `/movies/${id}`
}}>{moive.original_title}
</Link>
```
#### catch all URL
- 라우트 파일명 `[id].js` -> `[...id].js` 로 변경하면 중간에 다른 URL 끼어들어도 라우팅 값 가져올 수 있음.
  `http://localhost:3000/movies/amazing+spiderman/2312323`
```javascript
// index.js
router.push(`/moives/${title}/${id}`);

// [...params].js | [id].js 에서 이름 바꿔줌
const router = useRouter();
const [title, id] = router.query.params || [];  // || [] 안 하면 바로 URL 치고 들어가면 오류남.
```
- incognito 로 들어가면 값은 나오지만 html 에는 안나옴. 검색엔진은 볼 수 없음.
#### 404 Pages not found 페이지 :
- pages 폴더에 `404.js` 파일 만들면 끝!
