#Variable - 변수.

## Types
- `Boolean`: true / false
- Numeric:
	- `uint8`: (0 to 255)
	- `uint16`: (0 to 65535)
	- `uint32`: (0 to 4294967295)
	- `uint64`: (0 to 18446744073709551615)
	- `int8`: (-128 to 127)
	- `int16`: (-32768 to 32767)
	- `int32`: (-2147483648 to 2147483647)
	- `int64`: (-9223372036854775808 to 9223372036854775807)
	- `float32`: 32-bit 실수
	- `float64`: 64-bit 실수
	- `complex64`: float32 를 포함한 복소수
	- `complex128`: float64 를 포함한 복소수
- Char
	- `byte`: uint8 의 alias - [ASCII](https://en.wikipedia.org/wiki/ASCII)
	- `rune`: int32 의 alias (1~4byte) - [UTF-8](https://en.wikipedia.org/wiki/UTF-8). '' 으로 묶어서 표시
- `string`: "" 으로 묶어서 표시


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

### iota - 순서대로 상수 생성.

상수 값을 일일이 대입하지 않고 순서대로 생성하려면 `iota` 사용.
```go
const (
	A = iota	// 0
	B = iota	// 1
	C = iota	// 2
)
```

또는 아래와 같이 선언 가능. 새로 선언하면 초기화 됨.
```go
const (
	A = iota	// 0
	B					// 1
	C					// 2
)

const (
	D = iota	// 0
	E					// 1
	F					// 2
)
```

아무 연산도 설정 안하면 +1. 다른 연산 설정 가능.
```go
const (
	_ = iota	//0
	B = iota * 10	// 1 * 10
	C = iota * 10	// 2 * 10
)
```

비트 연산도 가능.
```go
package main

import "fmt"

const (
	_  = iota             //0
	KB = 1 << (iota * 10) // 1 << (1 * 10)
	MB = 1 << (iota * 10) // 1 << (2 * 10)
)

func main() {
	fmt.Println("Binary\t\tDecimal")
	fmt.Printf("%b\t", KB)
	fmt.Printf("%d\n", KB)
	fmt.Printf("%b\t", MB)
	fmt.Printf("%d\n", MB)
}
```

실행 결과
```sh
Binary		Decimal
10000000000	1024
100000000000000000000	1048576
```

