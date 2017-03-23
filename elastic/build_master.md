## ES 마스터 빌드하기

set JAVA_HOME
```
$ vim .bash_profile
export JAVA_HOME=$(/usr/libexec/java_home)
$ source .bash_profile
$ echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/1.7.0.jdk/Contents/Home
```
install gradle if needed
```
brew install gradle
```

get Elasticsearch source
```
git clone https://github.com/elastic/elasticsearch.git
cd elasticsearch
```

run gradle
```
gradle
gradle build
```


## kibana build

install latest node.js
```
nvm install 6.10.0
```


grunt.js 안에 버전 확인.

```
npm run elasticsearch
```
