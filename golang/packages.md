#Packages

함수 이름이 대문자면 public, 소문자면 private.
```
// 다른 패키지에서 접근 가능
func Print(s string) string { 
  ...
}

// 다른 패키지에서 접근 불가.
func print(s string) string { 
  ...
}
```