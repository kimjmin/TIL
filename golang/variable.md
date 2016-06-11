#Variable - 변수.

## 변수 선언

### var
맨 앞에 var 가 오고, 변수명이 오고, 뒤에 타입이 옴.
```go
var a string
a = "Jongmin Kim"
```

선언 하면서 값 할당. 타입은 알아서 지정됨.
```go
var a = "Jongmin Kim"
```

한꺼번에 여러 값 선언.
```
var name, age, married = "Jongmin", 36, true
```

### shorthand
타입 선언 없이 := 를 이용해서 변수에 초기 값을 할당하면서 선언.
```go
a := 10
b := "Hello"
c := 5.5
d := true
```

### %v
변수의 값을 출력
```go
package main

import "fmt"

func main() {
	a, b, c, d := 10, "Hi", 361.231, true

	fmt.Printf("%v, %v, %v, %v \n", a, b, c, d)
}
```
실행 결과
```
$ go run main.go
10, Hi, 361.231, true
```

### %T
변수의 타입을 출력
```go
package main

import "fmt"

func main() {
	a, b, c, d := 10, "Hi", 361.231, true

	fmt.Printf("%T, %T, %T, %T \n", a, b, c, d)
}
```
실행 결과
```
$ go run main.go
int, string, float64, bool
```

> 다른 출력 형식들은 다음 페이지에서 확인 가능.
> https://golang.org/pkg/fmt/


### 초기값 확인
선언만 하고 난 뒤 할당되는 값 확인
```go
package main

import "fmt"

func main() {
	var a int
	var b string
	var c float64
	var d bool

	fmt.Printf("%v, %v, %v, %v \n", a, b, c, d)
}
```
실행 결과
```
$ go run main.go
0, , 0, false
```

## 상수 선언

`var` 대신 `const` 사용. 반드시 초기값을 대입해야 하며 대입을 안 하거나 초기값을 바꾸려고 하면 컴파일 에러남.

```go
const age int = 36
const name string = "Jongmin"
const score int // 초기값 대입 안하면 컴파일 에러.

age = 20       // 값 바꾸려고 하면 컴파일 에러
```

동시에 여러 상수 선언
```go
const x, y	int = 5, 10
const age, name	= 36, "Jongmin"
```

( )를 사용해서 상수 여러 개를 한 번에 선언하고 초기화 가능.
```go
const (
	x, y	int = 5, 10
	age, name	= 36, "Jongmin"
)
```
