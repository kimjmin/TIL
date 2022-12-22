# MacOS 포맷 이후 초기 셋팅.

#### 환경 설정
1. iterm2 : https://iterm2.com
2. HomeBrew : `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
3. NaverD2Coding Font : https://github.com/naver/d2codingfont
4. zsh(미설치시) : `brew install zsh`
5. oh my zsh : `sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
6. zsh 테마 적용 : https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#nicoulaj
  - `vim .zshrc`
  - `ZSH_THEME="robbyrussell"` --> `ZSH_THEME="nicoulaj"`
  - `source ~/.zshrc`
7. zsh 플러그인 설치 : 
```
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
brew install autojump
```
`vim .zshrc` 에서 아래 내용 수정.
```
plugins=(
        git
        zsh-autosuggestions
        zsh-syntax-highlighting
        autojump
)
```
8. 역따옴표 \` --> ₩ 으로 변경되지 않게 설정 : 
  - /Library 폴더로 이동
  - KeyBindins 폴더 생성
  - DefaultkeyBinding.dic 파일 생성 -> 작성 : ```{ "₩" = ("instertText:", "`"); }```
  - 재부팅

#### github
- git 설치 : `brew install git`
- 계정 등록 : 
  - `git config --global user.name "kimjmin"`
  - `git config --global user.name "kimjmin@gmail.com"`
- 암호화 토큰 키체인 등록 : https://zest1923.tistory.com/58

#### Visual Studio Code 설치
1. 다운로드 & 설치 : https://code.visualstudio.com
2. 터미널에서 code 명령 설치 : 
  - `cmd + Shift + P`
  - `shell` --> Enter
4. 환경설정
  - `cmd + ,`
  - Font Size : 14
  - Font Family 맨 앞에 D2Coding 추가 : `D2Coding, Menlo, Monaco, 'Courier New', monospace`

#### nvm 설치
- https://github.com/nvm-sh/nvm#installing-and-updating 참고
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash```
- `~/.zshrc` 에 다음 내용 자동으로 추가됨 : 
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
- `source ~/.zshrc` 또는 터미널 재시작


