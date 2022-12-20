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


#### git 설치
brew install git

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



