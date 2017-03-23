항상 보면 도커 이미지 파일들은

```sh
/var/lib/docker
```

아래에 있다고 하는데 MacOS에서는 눈을 씻고 찾아봐도 없다.
맥OS는 또 별도의 도커 VM을 띄워 그 안에 이미지, 컨테이너, 볼륨, 네트워크 파일들을 다 때려넣는다.

도커 VM 쉘 접속 방법. - 스크린 이용.

```sh
screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty
```

나가는 방법 - 열려있는 모든 스크린을 다 킬 해야함.
```sh
Control-a k 
```

https://ss64.com/osx/screen.html 참고.