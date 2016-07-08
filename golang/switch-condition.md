# switch 문.

다른 언어와 다르게 `break` 필요 없음. break 가 디폴트라 case 문 실행되고 나면 자동 break.

```go
package main

import "fmt"

func main() {
	switch "three" {
	case "one":
		fmt.Println("one")
	case "two":
		fmt.Println("two")
	case "three":
		fmt.Println("three")
	case "four":
		fmt.Println("four")
	default:
		fmt.Println("default")
	}
}
```

실행 결과
```sh
three
```

### fallthrough
`fallthrough` 입력하면 그 다음 case 문도 true 로 가정하고 실행.
```go
package main

import "fmt"

func main() {
	switch "three" {
	case "one":
		fmt.Println("one")
	case "two":
		fmt.Println("two")
	case "three":
		fmt.Println("three")
    fallthrough
	case "four":
		fmt.Println("four")
	default:
		fmt.Println("default")
	}
}
```

실행 결과
```sh
three
four
```

### multiple even : 멀티 조건

, 를 사용해서 다수의 비교문 사용 가능.
```go
package main

import "fmt"

func main() {
	switch "three" {
	case "one":
		fmt.Println("one")
	case "two", "three":
		fmt.Println("two and three")
	case "four", "five":
		fmt.Println("four and five")
	default:
		fmt.Println("default")
	}
}
```
실행 결과
```sh
two and three
```

### case 에서 비교문 직접 사용

switch 에는 조건을 안주고 case 에서 비교문 사용.
```go
package main

import "fmt"

func main() {
	con := "two"
	switch {
	case con == "one":
		fmt.Println("one")
	case con == "two":
		fmt.Println("two")
	case con == "three":
		fmt.Println("three")
	default:
		fmt.Println("default")
	}
}
```

실행 결과
```sh
two
```

### true case 가 여러개일 때
첫 case 만 실행하고 종료.
```go
package main

import "fmt"

func main() {
	con := 2
	switch {
	case con >= 1:
		fmt.Println("one")
	case con >= 2:
		fmt.Println("two")
	case con >= 3:
		fmt.Println("three")
	default:
		fmt.Println("default")
	}
}
```

실행결과
```sh
one
```

### 타입에 따른 분기

(type) assertion 을 이용해서 변수 타입에 따라 실행 가능.

```go
package main

import "fmt"

func main() {
	getType("string")
	getType(10)
}

func getType(con interface{}) {
	switch con.(type) {
	case int:
		fmt.Println("int")
	case bool:
		fmt.Println("bool")
	case string:
		fmt.Println("string")
	default:
		fmt.Println("default")
	}
}
```
interface{} 로 타입과 상관 없이 인자로 받음.
실행결과

```sh
string
int
```