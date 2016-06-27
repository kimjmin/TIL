#Char - golang 에서의 문자 타입.

## byte
uint8 의 alias - [ASCII](https://en.wikipedia.org/wiki/ASCII) 형식

"hi" 를 byte 배열로 컨버전 해서 출력. golang 에서는 타입을 바꾸는걸 캐스팅이 아니라 컨버전 이라고 함.
```go
package main

import "fmt"

func main() {
	fmt.Println([]byte("hi"))
}
```

실행화면 
```
[104 105]
```

"안녕" 을 byte 배열로 출력.
```go
package main

import "fmt"

func main() {
	fmt.Println([]byte("안녕"))
}
```

실행화면
```
[236 149 136 235 133 149]
```

50 - 140 까지 byte 출력.
```go
package main

import "fmt"

func main() {
	for i := 50; i <= 140; i++ {
		fmt.Println(i, "-", string(i), "-", []byte(string(i)))
	}
}
```
실행화면
```
50 - 2 - [50]
51 - 3 - [51]
52 - 4 - [52]
53 - 5 - [53]
...
138 -  - [194 138]
139 -  - [194 139]
140 -  - [194 140]
```

## Rune 타입.

int32 의 alias. multiple byte (1~4byte) - [UTF-8](https://en.wikipedia.org/wiki/UTF-8). 형식.
영어 알파벳의 경우 자동으로 ASCII(1 byte) 로 되고 다른 언어는 더 늘어남.

"hi" 를 rune 배열로 출력.
```go
package main

import "fmt"

func main() {
	fmt.Println([]rune("hi"))
}
```

실행화면 
```
[104 105]
```

"안녕" 을 rune 배열로 출력.
```go
package main

import "fmt"

func main() {
	fmt.Println([]rune("안녕"))
}
```

실행화면
```
[50504 45397]
```

## string

rune 의 배열. byte, rune 은 single quote '' 로 묶고 string 은 double quote "" 로 묶음.

rune 타입 'a' 와 string 타입 "a" 비교.
```go
package main

import "fmt"

func main() {
	a := 'a'
	fmt.Println(a)
	fmt.Printf("%T \n", a)
	fmt.Printf("%T \n", rune(a))
	aa := "a"
	fmt.Println(aa)
	fmt.Printf("%T \n", aa)
	fmt.Printf("%T \n", []rune(aa))
}
```

실행결과
```
97
int32
int32
a
string
[]int32
```

backtick `` 로도 묶는 것이 가능. 이 경우 줄바꿈 및 내부에 "" 사용 가능.

```go
package main

import "fmt"

func main() {
	fmt.Println(`Hi
	My Name is "Jongmin Kim".
	Nice to meet you.`)
}
```

실행 결과
```
Hi
	My Name is "Jongmin Kim".
	Nice to meet you.
```