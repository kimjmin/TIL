#Closure

##익명 함수 Anonymous Function
함수 안에서 다른 함수를 정의하려고 하면 컴파일 오류가 난다.
```go
package main

import "fmt"

func main() {
	x := 0
	// 컴파일 오류 발생
	func increment int () {
		x++
		return x
	}
	fmt.Println(increment())
	fmt.Println(increment())
}

```

다음과 같이 익명 함수를 써서 increment 변수의 값에 함수를 할당하면 사용 가능함.
```go
package main

import "fmt"

func main() {
	x := 0
  // 익명 함수.
	increment := func() int {
		x++
		return x
	}
	fmt.Println(increment())
	fmt.Println(increment())
}
```

## 함수 리턴
함수 값의 리턴으로 함수를 리턴함.
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
	increment := wrapper()
	fmt.Println(increment()) // 1
	fmt.Println(increment()) // 2
	fmt.Println(wrapper()()) // 1 : 새로운 함수값 리턴.
}
```