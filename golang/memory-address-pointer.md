#Memory Address
해당 변수값을 저장하고 있는 실제 메모리의 위치 주소.
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

미터를 입력받아 야드로 변환하는 코드. 표준입력 받을 때는 메모리 주소에 넣어야 함.
```go
package main
import "fmt"
const meterToYard float64 = 1.09361
func main() {
	var meters float64
	fmt.Print("enter meters : ")
	fmt.Scan(&meters)

	yards := meters * meterToYard
	fmt.Println(meters, " Meters will be ", yards)
}
```

#Pointer
메모리 주소값을 가리키는 값. `*int` 형식으로 선언.
기본적으로 golang 의 모든 값 assign 은 pass by value 인데 포인터를 사용하면 call by reference 가능.
```go
package main

import "fmt"

func main() {
	a := 35
	fmt.Println(a)  //35
	fmt.Println(&a) //0x....

	var b *int
	b = &a          //*int : int를 가리키는 포인터 타입.
	fmt.Println(b)  //0x....
	fmt.Println(*b) //35

	*b = 36         //b 가 가리키는 어드레스 a에 36 할당.
	fmt.Println(a) //36
}
```
특히 함수에서 call by reference 형식으로 변수 전달할 때 용이함.
![](https://blog.penjee.com/wp-content/uploads/2015/02/pass-by-reference-vs-pass-by-value-animation.gif)

Pass by value 예 :
```go
package main
import "fmt"

func main() {
	x := 5
	xTo10(x)
	fmt.Println(x) // x 값은 계속 5
}

func xTo10(x int) { // value 값 5 를 전달받음.
	x = 10
}
```

Pass by reference 예:
```go
package main
import "fmt"

func main() {
	x := 5
	xTo10(&x)
	fmt.Println(x) // 10 으로 업데이트.
}

func xTo10(x *int) {  // x 의 메모리 주소 전달받음.
	*x = 10
}
```