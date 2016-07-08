# if true / false

```go
package main

import "fmt"

func main() {
	if true {
		fmt.Println("print")
	}
	if false {
		fmt.Println("not print")
	}
}
```

실행결과
```sh
print
```

### ! 
! 단항연산자로 조건문 invert

```go
package main

import "fmt"

func main() {
	if !true {
		fmt.Println("print")
	}
	if !false {
		fmt.Println("not print")
	}
}
```

실행결과
```sh
not print
```

### 변수 선언
조건문 앞에 ; 로 구분해서 변수 선언 가능. scope 는 if {} 분기문 안에서만 유효.

```go
package main

import "fmt"

func main() {

	a := true
	if b := "asdf"; a {
		fmt.Println(b)
	}
}
```

```sh
asdf
```

### else
앞의 if 조건문과 상반되는 조건에서 실행
```go
package main

import "fmt"

func main() {
	if false {
		fmt.Println("false")
	} else {
		fmt.Println("print")
	}
}
```
실행 결과
```sh
print
```

### else if
앞의 조건이 실행되지 않은 경우 그 다음 조건 제시.

### 연산
조건문에 연산 가능.
```go
package main

import "fmt"

func main() {
	for i := 1; i < 10; i++ {
		if i%3 == 0 {
			fmt.Println(i)
		}
	}
}
```
실행결과
```sh
3
6
9
```