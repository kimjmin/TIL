# Func returns

argument - 호출하는 코드에서 값을 담아 보내는 변수
parameter - 호출되는 함수에서 값을 넘겨받는 매개변수

### fmt.Sprint
외부 io로 출력하는 것이 아니라 string 으로 출력함. 입력 받은 값의 타입과 상관 없이 모두 string 으로 변환.

```go
package main

import "fmt"

func main() {
  fmt.Println(name("Jongmin")) /* name("Jongmin") - argument */
}

func name(lname string) string { // lname - parameter
  return fmt.Sprint(lname)
}
```

## 반환 변수 (return variable) 명시
```go
package main 

import "fmt"

func main() {
  fmt.Println(name("Jongmin"))
}

func name(lname string) (s string) {
  s = fmt.Sprint(lname)
  return
}
```
return variable 로 `s` 를 명시 해 줬기 때문에 `return` 만 하면 `return s` 를 반환함.

## 다중 반환 (multiple returns)
```go
package main

import "fmt"

func main() {
  fmt.Println(name("Jongmin", "Kim"))
}

func name(fname, lname string) (string, string) {
  return fmt.Sprint(fname, lname), fmt.Sprint(lname, fname)
}
```

## 베리아딕 variadic : '...' 임의의 다수를 취함
... 0 ~ 무제한의 매개변수를 받을 수 있는 명시.

Sprint 소스코드 
```go
func Sprint(a ...interface{}) string {
  p := newPrinter()
  p.doPrint(a, false, false)
  s := string(p.buf)
  p.free()
  return s
}
```

- `...` variadic
- `interface{}` 아무 타입이나 입력 가능.

특정되지 않은 수의 변수를 입력받는 함수.
입력받은 값들의 평균 출력
```go
package main

import "fmt"

func main() {
	n := average(43, 56, 87, 12, 45, 57)
	fmt.Println(n)
}

func average(sf ...float64) float64 {
	fmt.Println(sf)
	fmt.Printf("%T\n", sf)

	total := 0.0
	for _, v := range sf { // 보통은 i, v := range sf 로 하지만 i 는 사용 할 일이 없어 _ 로 입력.
		total += v
	}
	return total / float64(len(sf))
}
```

실행 결과
```sh
[43 56 87 12 45 57]
[]float64
50
```

- `slice+...` : slice 슬라이스 안에 값들을 넣고 그 슬라이스를 분해할 때

(data) 하면 1개의 slice 변수를 넘기는 것이라 오류남. (data...) 은 슬라이스 안의 값들을 풀어서 넘김.
```go
package main

import "fmt"

func main() {
	data := []float64{43, 56, 87, 12, 45, 57}  // float64 타입의 슬라이스
	n := average(data...) // n := average(43, 56, 87, 12, 45, 57) 와 같음.
	fmt.Println(n)
}

func average(sf ...float64) float64 {
	fmt.Println(sf)
	fmt.Printf("%T\n", sf)

	total := 0.0
	for _, v := range sf {
		total += v
	}
	return total / float64(len(sf))
}
```
실행결과는 위와 동일

슬라이스 풀지 않고 그대로 넘기는 방법.
```go
package main

import "fmt"

func main() {
	data := []float64{43, 56, 87, 12, 45, 57}
	n := average(data)
	fmt.Println(n)
}

func average(sf []float64) float64 {
	fmt.Println(sf)
	fmt.Printf("%T\n", sf)

	total := 0.0
	for _, v := range sf {
		total += v
	}
	return total / float64(len(sf))
}
```
실행결과는 동일.

## func expressions 변수에 함수 할당.
변수를 선언하고 변수에 함수를 할당하는 것.
```go
package main

import "fmt"

func main() {
	greeting := func() { // 함수를 변수에 할당. 함수는 이름 정의 안함 (anonymous).
		fmt.Println("Hello world")
	}
	greeting() // 함수를 할당한 변수를 함수처럼 실행
  fmt.Printf("%T\n", greeting)  // greeting 변수의 타입 출력
}
```
실행 결과
```sh
Hello world
func()
```

리턴 값으로 함수를 리턴하는 함수 (뭔소리여..?)
```go
package main

import "fmt"

func main() {
	greet := makeGreet()      // makeGreet 함수 변수에 할당.
	fmt.Println(greet())      // 할당한 greet 변수를 함수로 호출.
	fmt.Printf("%T\n", greet) // greet 변수 타입 확인.
}

func makeGreet() func() string { // (string 을 리턴하는 익명함수 - func() string) 를 리턴하는 함수 - makeGreet
	return func() string { // 리턴값으로 넘길 익명함수
		return "Hello World" // string 리턴
	}
}
```
실행 결과
```sh
Hello World
func() string
```

## 클로저 closure
scope (영역) 을 정의하는 범위
- package scope (패키지 영역): 패키지 전역에서 사용 가능
- function scope (함수 영역): 선언된 함수 안에서 사용 가능
- inner scope (범위 영역): 선언된 범위 (if, for, 내부함수 등) 안에서 사용 가능.

변수 x 를 package scope 에서 선언하고 사용하면 값 공유.
```go
package main

import "fmt"

var x int // package scope: x = 0

func increment() int {
	x++
	return x
}

func main() {
	//function scope
	fmt.Println(increment()) // 1
	fmt.Println(increment()) // 2
}
```

function scope 에서 선언하면 호출할 때 마다 값 초기화.
```go
package main

import "fmt"

func increment() int {
	x := 0 // function scope: x = 0
	x++
	return x
}

func main() {
	//function scope
	fmt.Println(increment()) // 1
	fmt.Println(increment()) // 1
}
```

`closure` : func expressions 으로 호출시 변수 x 가 function scope 에서 선언되었지만 호출시 값 초기화 되지 않음.
```go
package main

import "fmt"

func wrapper() func() int {
	x := 0
	return func() int {
		x++
		return x
	}
}

func main() {
	increment := wrapper() // x:= 0 여기서 할당됨
	fmt.Println(increment()) // 1 : wrapper() 안에 있는 익명함수 func() int 만 호출.
	fmt.Println(increment()) // 2 : wrapper() 안에 있는 익명함수 func() int 만 호출.
}
```
