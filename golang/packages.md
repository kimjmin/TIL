#Packages

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

## Visible from outside - Public / private : 외부에서 패키지 호출

함수 이름이 대문자면 public, 소문자면 private.
- capitalize: exported, visible outside the package
- lowercase: unexported, not visible outside the package.

```
// 다른 패키지에서 접근(호출해서 사용) 가능
func Print(s string) string { 
  ...
}

// 다른 패키지에서 접근 불가.
func print(s string) string { 
  ...
}
```