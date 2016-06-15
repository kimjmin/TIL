#Memory Address

value 값 앞에 & 붙이면 해당 value 값이 저장된 메모리 주소값이 반환된다.

```go
package main
import "fmt"

func main() {
  a := 40
  fmt.Println("a - ", a)
  fmt.Println("a is at memory - ", &a)
}
```