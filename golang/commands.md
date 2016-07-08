#Go Commands - Go 명령어

## go run
파일 실행
```sh
go run main/main.go
```

## go build
컴파일
```sh
go build main
```
main 패키지 안에 unix 는 `main`, Windows 는 `main.exe` 실행 파일 생성됨.

## go install
소스 디렉토리에 있는 파일들을 전부 실행, bin 디렉토리에 컴파일 시킴
```sh
go install
```
`$GOPATH/src/main/main.go` 가 있었다면 컴파일 되어서
unix - `$GOPATH/bin/main`, windows - `$GOPATH/bin/main.exe` 파일 생성됨.

## go clean
기존에 컴파일 해 놓은 실행 파일들, 잡스러운 파일들 삭제.
```sh
go clean
```

## go fmt
파일 유효성 검사하고 (error, warning) 사용하지 않은 변수, 패키지 등 정리.
... 으로 해당 디렉토리와 서브디렉토리의 모든 파일 검사 가능.
```sh
go fmt ...
```
