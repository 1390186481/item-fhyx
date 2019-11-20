### git操作
```bash
# 用户设置 每台电脑只需要执行一次
$ git config --global user.name "Zhang san"
$ git config --global user.email "zhangsan@163.com"
```

```bash
# 初始化仓库
$ git init

# 查看状态
$ git status

# 添加文件管理
$ git add filename  #添加指定文件
$ git add .         #添加所有文件
$ git add path/     #添加文件夹

# 提交到本地仓库
$ git commit -m 'first commit'

# 查看提交日志
$ git log

# 恢复版本
$ git reset --hard hash(前6位)

# 更新
$ git pull origin master

# 忽略列表
# 在项目根目录创建一个名为  .gitignore 的文件
# 该文件是git仓库的忽略文件
# 该文件每一行忽略一个内容 可以是文件名或目录
```

```bash
# 远程仓库操作
# 设置远程仓库源
$ git remote add origin https://github.com/1390186481/item-fhyx.git
# 将本地仓库推送到远程仓库
$ git push -u origin master
# 从远程仓库拉取项目
$ git pull origin master
# 从远程仓库复制项目
$ git clone https://github.com/1390186481/item-fhyx.git
```

### 分支操作
```bash
# 新建分支
$ git branch 分支名  

# 查看分支
$ git branch

# 切换分支
$ git checkout 分支名

# 合并分支
$ git merge 分支名
```