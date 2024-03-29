- https://www.youtube.com/watch?v=Z9dvM7qgN9s

UI 도구 : sourcetree 추천.
글로벌 환경 설정. `--global` 안 하면 현재 폴더 기준으로 생성됨.
```
git config --global
```
에디터로 환경 설정 편집
```
git config --global -e
```
시작 : `git init`
삭제 : `git -rf .git`

단축키 설정 : `git status` 대신 `git st` 로 실행 가능
```
git config --global alias.st status
```

Git 의 상태들
working directory --> staging area --> .git directory ==push==> remote (github)
working directory <==pull== remote

working directory : tracked | untracked
tracked : unmodified | modified

working directory | tracked | modified 만 staging 으로 이동함.

`git status` 를 이용해서 상태 볼 수 있음.
![](git_status.png)

### staging area

staging 에 추가
```
git add 
```
staging 에서 tracked 로 이동 삭제
```
git rm --cached *
```
모든 파일 staging 에 추가하면서 삭제된 파일 제거
```
git add .
```

tracking 하고 싶지 않은 파일은 `.gitignore` 파일을 만들어 추가.
```
*.log
build/.log # <-- build/*.log
```

짧게 보기 : `git st -s`
수정 사항 전부 보기 : `git diff`
![](diff.png)
나갈때는 `q` 키 누르면 나감.
staging 까지 전부 보기 : `git diff --staged` 또는 `git diff --cached`

에디터 이용하도록 설정 : `git config --global -e` 에서 아래 추가
```
[diff]
	tool = vscode
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE
```
difftool 으로 이용해서 VS Code 에서 비교 : `git difftool` `git difftool --staged`

## .git directory : commit
커밋 명령 : `git commit`
옵션 없으면 템플릿 나와서 title, decscription 작성해야 함.
```
Title 

Descrption
```
커밋하고 나서 `git st` 하면 staging 깨끗이 비워져 있음.
커밋한 내용 보려면 : `git log`
간단히 메시지 추가하면서 커밋하려면 : `git commit -m "이런저런 내용 추가"`
staging 과 working directory 전부 싸그리 바로 커밋 : `git commit -am "걍 다 커밋"`

commit 은 작업 별로 제목 잘 달아서 넣는것이 좋겠다.
fix 를 할때는 딱 그 내용만 수정하고 커밋할것. 이것 저것 자잘하게 한꺼번에 말것.


