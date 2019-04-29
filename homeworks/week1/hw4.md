## 跟你朋友介紹 Git

### Git 是幫助我們做版本控制的機制

第零步 => 在要版本控管的資料夾做 git init
第一步 => 建立一個 .gitignore 檔案，並把不要commit 的檔案名稱 輸入到 .gitignore/ .gitignore 本身也要加到版本控制裡面（其他協同者可能需要看或查找，一般放log檔、作業系統的紀錄檔等與專案不太有直接關係的檔案）

第二步 => git add 檔案（git add . 會 add 所有新增檔案跟修改的檔案）
第三步 => git commit -m "message"/ git commit -am "message"
第四步 => git log(可以看有哪些commit/從頭到尾有幾個版本) / git checkout(可以切換到不同版本的資料夾去， git checkout master 為切到主軸版本資料夾去)


第五步 => 同步遠端(github)，在github 創建一個 new repository
第六步 => git remote add origin https://~  (我要在該網址的地方新增一個叫 " origin"的倉庫)
第七步 => git push -u origin master  (我要把我現在所在的分支(本地) push到 origin 倉庫裡 一個叫 master的分支(push的同時，如果remote還沒有該分支，就會創建然後執行 push))

----
如果你在 git commit 的時候出現錯誤，跳出了一個要你設定帳號跟姓名的畫面，請輸入以下指令
（記得把名字跟 email 換成你自己的）
1. git config --global user.name "your name"
2. git config --global user.email "youremail"


在資料夾 git init ，表示要對這個資料夾做版本控制，會產生一個 .git 資料夾
如果要移除版本控制，則移除 .git 資料夾， rm -r .git 

----
#### Git 相關指令
- git status 看現在的git 狀態
- git add 將檔案加到暫存區
- git rm --cached 將檔案移出暫存區
- git add . 將"全部的"檔案加到暫存區
- git add folder  將此資料夾的檔案都加到暫存區

- git checkout => 回到之前的版本/ git checkout commit的代碼
- git checkout master => 回到/換到 該支線上

- git log => 查看歷史紀錄（被commit 過的）/ 按 q 離開該視窗


----
#### Git 相關指令詳解 (commit 篇)
還沒被commit時有兩個狀態:
staged(changes to be committed) 已加到暫存區準備被版本控制
untracked file (還未加入暫存區的檔案，不會被版本控制)

用 git commit -am "xxx"  將在暫存區與經過修改的舊檔案(曾經有add或commit過) commit

git commit 會進到 vim的編輯環境，要打 commit message 
可以直接 git commit -m "這裡輸入 commit message" (不進到 vim 編輯環境的 commit)
git commit -am "這裡輸入 commit message" 為 git add . + git commit -m (把所有更改過的檔案commit，新的檔案必須經過git add，新檔案在此處無效)>>>較常使用

git diff => 在commit 前可以查看該檔案更改了哪些地方（按q 可以退出該視窗）

#### Git 相關指令詳解 (gitignore 篇)
.gitignore 檔案，可以把不commit的東西放進去裡面，這樣在挑檔案進暫存區的時候就不用一直刻意避開該檔案
用 touch .gitignore 創立檔案
再用 vim .gitignore 開啟編輯檔案，把要ignore的檔案名稱輸入進去

#### Branch
1. 要開發一個新功能、要解決bug等，開一個新的branch是個好習慣）
2. 不同群的人做不一樣的事，最後再合併起來

- git branch -v 看現在有幾個分支 / 目前位在哪個分支
- git branch 產生一個新的分支(內容跟master 一模一樣)/ git branch - branchName
- git branch -d  刪除分之/ git branch -d branchName
- git checkout branchName => 切換branch
- git checkout commit代碼 => 切換到不同版本
- git checkout -b branchName  => 創立一個新的分支，並切換到該分支(git branch + git checkout)

#### 參考資料：https://gitbook.tw/chapters/using-git/add-to-git.html