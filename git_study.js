
/*
git

リポジトリ：管理したいコードの一つのまとまり
コミット：変更や追加、削除を記録すること
tracked file:追跡されるファイル
untracked file:

ブランチ:履歴を分岐させる
―分岐する前と後の両方の状態を保持できる
ベース（main/masterブランチ,新しいブランチの影響を受けない）→新しいブランチ

マージ:あるブランチに対して別のブランチで変更した結果を取り込むこと
「コンフリクト」に注意


【Git コマンドまとめ】
git init :ファイルに.gitが追加されて、gitで管理できるようになる。git bashで作成しているフォルダがある階層まで移動する。
git add . :全部のファイル、ディレクトリも含めてコミットの予約をできる。.でファイル指定ができる
git log :今のブランチのコミットを見ることができる

(状況確認)
git status:ファイルの状況を表示する。
git diff:リポジトリとワークツリーの差分をチェック
git diff -staged:リポジトリとステージの差分をチェック
git log :今のブランチのコミットを見ることができる

(元に戻す)
git restore <ファイル名>:ワークツリーの変更を取り消す
git restore -staged <ファイル名>:ステージに挙げた変更をワークツリーに戻す


「Githubでのチーム開発の方法」
（ブランチの一覧を表示する）
git branch -a

(ブランチを切り替える)
git switch (ブランチ名):
git switch -c 

(変更をマージする)
git merge (ブランチ名)
git merge (リモート名)/（ブランチ名）:

(コンフリクト)


「プッシュとプル」
pull=fetch+merge

git remote add origin(リモート名) URL（リモートURL）:
git push origin(リモート名) main（ブランチ名）:リモートリポジトリにプッシュ
git pull origin main
fit fetch origin 


「プルリクエスト」
プルリクエスト：自分がファイルを修正した際に、その内容で問題ないかをレビュー依頼して問題がなかったら変更してくださいとリクエストを依頼すること
（１）mainを最新に更新
（２）ブランチを作成
（３）ファイル修正・コミット
（４）プッシュ
（５）プルリクエスト
（６）コードレビュー
（７）マージ

git commit -m "example message　変更内容を記録する":
git checkout -b feature/user_login:
git checkout main:mainブランチに切り替わる
git merge feature/user:mainのブランチに合わせることに注意する。




【Pycharm】
*/
console.log(1);


