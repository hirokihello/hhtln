#### 新しい機能もりもり予定のportfolio

* create-react-appで作られてます。
* eject前なのでwebpackの設定描いてないです。
* makefileで諸々のコマンド管理してます。

#### 初期設定

```
make build
```

#### 起動

```
make run
```

#### lint
* eslint/prettierを使ってます。pre-commitでeslintが走る事で最低限lintは担保されています。
* editor configを使っているので、それにしたがってください。

#### pathについて
* 絶対pathの設定をtsconfigで行っています。