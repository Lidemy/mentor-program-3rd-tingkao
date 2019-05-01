## 交作業流程
1.  新開一個 branch：git branch week1
2.  切換到 branch：git checkout week1
3.  開始做作業
4.  把作業存檔：git add hw1，git commit -am "message hw1"
5.  把作業上傳到 github (把分支 push 到 github)：git push original week1
6.  到 github 按 PR：pull requests
7.  到 issue 發完成作業的訊息(要按照規範)
8.  作業完成批改
(Huli 會 merge 檔案到 master，並關閉 issue 和刪除 github 上的分支)
9.  切換到 master branch：git checkout master
10.  到本地端把 merge 過的 master pull 下來：git pull original master
---- 完成 ----
11.  把作業分支刪除 git branch -d week1
