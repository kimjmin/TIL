#Variable - 변수.

## 변수 선언

### var
맨 앞에 var 가 오고, 변수명이 오고, 뒤에 타입이 옴.
```golang
var a string
a = "Jongmin Kim"
```

선언 하면서 값 할당. 타입은 알아서 지정됨.
```golang
var a = "Jongmin Kim"
```

한꺼번에 여러 값 선언.
```
var name, age, married = "Jongmin", 36, true
```

### shorthand
타입 선언 없이 := 를 이용해서 변수에 초기 값을 할당하면서 선언.
```golang
a := 10
b := "Hello"
c := 5.5
d := true
```

### %v
변수의 값을 출력
```golang
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
```golang
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

### 초기값 확인
선언만 하고 난 뒤 할당되는 값 확인
```golang
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


