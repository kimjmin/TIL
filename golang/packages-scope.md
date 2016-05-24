#Packages and Scope - 패키지와 영역

## 패키지 선언
디렉토리명과 동일하게 선언
```
package kimjmin
```

## 패키지 호출
패키지명으로 호출.
```
import "fmt"
```
또는 원격에 있는 서드 파티 패키지 호출 가능.
```
import (
  "fmt"
  "github.com/kimjmin/lsbeat/config"
)
```

## main 패키지
실행될 .go 파일은 반드시 main 함수를 포함하고 있어야 함. 패키지가 main 일 필요는 없음
```
package kimjmin

func main() {
  ...
}
```

## 선언과 범위 - Declarations and Scope
함수, 변수 등의 사용 범위는 항상 정확하게 정의할것. github.com 등에서 import 하는 패키지가 많기 때문에 이름이 충돌나거나 할 여지도 많음.
참고: http://www.golang-book.com/books/web/01-02#scope 

### 패키지 레벨 접근
함수 밖에서 변수 선언하면 파일이 달라도 같은 패키지에서 접근 가능. 선언은 어디서나 (함수 위던 아래던) 가능.

main.go
```go
package main

import "fmt"

func main() {
	fmt.Println(a)
}
```

main2.go
```go
package main

var a = 42
```

main 실행. go run main.go 하면 오류남.
```
$ go clean
$ go build
$ ./main
42
```

변수 뿐 아니라 함수도 마찬가지로 같은 패키지에서 접근 가능.

main.go
```go
package main

import "fmt"

func main() {
	fmt.Println(a)
	foo()
}

var a = 42  // 변수가 사용된 함수 아래 선언해도 됨.
```

main2.go
```go
package main

import "fmt"

func foo() {
	fmt.Println(a)
}
```

main 실행. go run main.go 하면 오류남.
```
$ go clean
$ go build
$ ./main
42
42
```

### 함수 레벨 접근.
함수 안에서 선언하면 함수 안에서만 사용 가능. 선언은 사용 전에 되어야 함.
```go
package main

import "fmt"

func main() {
	a := 10
	fmt.Println(a)
	foo()
}

func foo() {
	fmt.Println(a) // 컴파일 오류
}
```

### 변수 은닉 (variable shadowing)
같은 이름을 함수로 썼다가 다시 변수로 쓰면 변수로 할당됨. 사용 가능하긴 하지만 이렇게 코딩하지 말것.
```go
package main

import "fmt"

func main() {
	addTen := addTen(23) //addTen 이 함수였다가 변수로 바뀜.
	fmt.Println(addTen)
}

func addTen(a int) int {
	return a + 10
}
```

실행
```
$ go run main.go
33
```

### 패키지 외부 접근 - Visibility
**변수, 함수 이름이 대문자면 public, 소문자면 private.**
- capitalize: exported, visible outside the package
- lowercase: unexported, not visible outside the package.

main2 패키지의 main2.go
```go
package main2

import "fmt"

//Mprint : exported. main2 패키지 외부에서 호출 가능.
func Mprint() {
	fmt.Println("Mprint")
}

//mprint : main2 패키지 내부에서만 사용 가능.
func mprint() {
	fmt.Println("mprint")
}
```

main 패키지의 main.go
```go
package main

import "github.com/kimjmin/main2"

func main() {
	main2.Mprint() // 호출 가능
	main2.mprint() // 컴파일 오류
}
```

