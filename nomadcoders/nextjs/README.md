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
