# for 반복문.

**GoLang 에는 while, do while 문 없음.**

- 인자 3개(선언, 조건, 반복)
- 인자 1개(조건)
- 인자 0개 - 무한루프. break 로 탈출. 

인자 3개
```go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
		fmt.Println(sum)
	}
}
```

인자 1개
```go
package main

import "fmt"

func main() {
	sum := 0
	i := 0
	for i < 10 {
		sum += i
		fmt.Println(sum)
		i++
	}
}
```

인자 0개
```go
package main

import "fmt"

func main() {
	sum := 0
	i := 0
	for {
		sum += i
		fmt.Println(sum)
		i++
		if i >= 10 {
			break
		}
	}
}
```

실행 결과는 셋 모두 동일
```
0
1
3
6
10
15
21
28
36
45
```
## break, continue

- break: loop 탈출
- continue: loop 재시작

```go
package main

import "fmt"

func main() {

	i := 0
	for {
		i++
		if i%2 == 0 {
			continue //i가 짝수이면 건너뜀
		}
		fmt.Println(i)
		if i >= 10 {
			break
		}
	}
}
```

실행결과
```
1
3
5
7
9
11
```

