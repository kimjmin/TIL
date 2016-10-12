# docker

기본 명령은 항상 docker 로 시작

### docker search <image> - 이미지 검색
```
docker search elasticsearch
```

### docker pull <image> - 이미지 내려받기
```
docker pull elasticsearch
docker pull elasticsearch:5.0
docker pull kimjmin/elasticsearch
```

### docker run - 컨테이너 생성
elasticsearch 이미지를 elastic 이라는 이름의 컨테이너로 생성
```
docker run --name elastic elasticsearch:5.0
```

백그라운드 실행
```
docker run -d --name elastic elasticsearch:5.0
```

9200 포트를 호스트에 링크
```
docker run -d -p 9200:9200 --name elastic elasticsearch:5.0
```

### docker ps - 컨테이너 목록 확인
실행중인 컨테이너 목록
```
docker ps
```

중지된 컨테이너 목록까지 표시
```
docker ps -a
```

### docker stop <container name> - 컨테이너 실행 중지
elastic 컨테이너 중지
```
docker stop elastic
```

### docker start <container name> - 컨테이너 시작
elastic 컨테이너 시작
```
docker start elastic
```

elastic 컨테이너 재시작
```
docker restart elastic
```

