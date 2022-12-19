# MacOS 포맷 이후 초기 셋팅.

#### 환경 설정
1. HomeBrew : `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. iterms2 : https://iterm2.com
3. NaverD2Coding Font : https://github.com/naver/d2codingfont
4. zsh(미설치시) : `brew install zsh`
5. oh my zsh : `sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
6. zsh 테마 적용 : https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#nicoulaj
  - `vim .zshrc`
  - `ZSH_THEME="robbyrussell"` --> `ZSH_THEME="nicoulaj"`
  - `source ~/.zshrc`

#### git 설치


#### nvm 설치



#### zsh 플러그인 설치 : 
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

