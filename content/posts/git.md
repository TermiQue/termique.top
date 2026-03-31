---
title: "Git 命令查找指南"
date: "2026-03-31"
summary: "总结了一些 Git 的常用命令"
category: "Git"
tags: ["Git", "Github", "Gitee"]
---

# Git



## Git简介

- Git是一个免费的、开源的**分布式版本控制系统**，可以高速处理从小型到大型的各种项目
- **版本控制**：是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统



## 官方网址 [Git](https://git-scm.com/)

## 命令备忘录

### 常用命令

#### 1. 创建存储库

```bash
# 创建一个新的本地存储库
git init [项目名称]

# 克隆存储库(代码仓库)
git clone <git_url>

# 将存储库克隆到指定目录
git clone <git_url> 指定目录

# 将存储库克隆到指定目录，并指定分支
git clone <git_url> -b <分支名称> 指定目录
```

#### 2. 更改

```bash
# 在工作目录中显示修改后的文件，为您的下一次提交暂存
git status

# 暂存文件，准备提交
git add [file]

# 暂存所有更改的文件，准备提交
git add .

# 将所有暂存文件提交到版本化历史记录
git commit -m "commit message"

# 将所有跟踪的文件提交到版本化历史记录
git commit -am "commit message"

# 取消暂存文件，保留文件更改
git reset [file]

# 将所有内容恢复到最后一次提交
git reset --hard

# 已更改但未暂存内容的差异
git diff

# 已 commited 但尚未提交的内容的差异
git diff --staged

# 在指定分支之前应用当前分支的任何提交
git rebase [branch]
```

#### 3. 配置

```bash
# 设置将附加到您的提交和标签的名称
git config --global user.name "name"

# 设置将附加到您的提交和标签 tags 的电子邮件地址
git config --global user.email "email"

# 启用 Git 输出的一些着色
git config --global color.ui auto

# 在文本编辑器中编辑全局配置文件
git config --global --edit

# 显示本地 repo 配置设置
git config --list

# 删除全局设置
git config --global --unset <entry-name>
```

#### 4. 分支

```bash
# 设置将附加到您的提交和标签的名称
git config --global user.name "name"

# 设置将附加到您的提交和标签 tags 的电子邮件地址
git config --global user.email "email"

# 启用 Git 输出的一些着色
git config --global color.ui auto

# 在文本编辑器中编辑全局配置文件
git config --global --edit

# 显示本地 repo 配置设置
git config --list

# 删除全局设置
git config --global --unset <entry-name>
```

#### 5. 临时提交

```bash
# 保存已修改和分阶段的更改
git stash

# 列出隐藏文件更改的堆栈顺序
git stash list

# 从存储堆栈顶部编写工作
git stash pop

# 丢弃存储堆栈顶部的更改
git stash drop

# 回到某个 stash 的状态
git stash apply <stash@{n}>

# 删除所有的 stash
git stash clear
```

#### 6. 本地库日志

```bash
# 显示当前活动分支的提交历史
git log

# 显示 branchA 上不在 branchB 上的提交
git log branchB..branchA

# 显示更改文件的提交，即使跨重命名
git log --follow [file]

# 显示 branchA 中的内容与 branchB 中的内容的差异
git diff branchB...branchA

# 以人类可读的格式显示 Git 中的任何对象
git show [SHA]
```

#### 7. 忽略文件

`.gitignore`

|     写法     |            作用            |
| :----------: | :------------------------: |
| `/文件夹名/` |       忽略整个文件夹       |
|   `*.后缀`   |    忽略所有该后缀的文件    |
|   `文件名`   |        忽略具体文件        |
|  `!文件名`   | **不忽略**这个文件（例外） |
|   `目录/*`   |     忽略目录下所有内容     |

```bash
# 忽略当前目录 logs 文件夹下的全部内容
/logs/
/logs/*
/logs/**
# 上述几条规则等效

# 忽略 Mac 系统文件，包括任意子路径下的同名文件（夹）
.DS_store

# 忽略 node_modules 文件夹，包括任意子路径下的同名文件夹
node_modules/

# 忽略任意子路径下build、target文件夹，
# 但不忽略src/main、src/test下的build、target文件夹
build/
!**/src/main/**/build/
!**/src/test/**/build/
target/
!**/src/main/**/target/
!**/src/test/**/target/

# 使用 ! 重新包含指定文件（夹）
!logs/.gitkeep
```

#### 8. 重构文件名

```bash
# 从工作目录中删除文件并暂存删除
git rm <filename>

# 从版本控制中删除文件但在本地保留文件
git rm --cached <filename>

# 更改文件名并准备提交
git mv <filename-orig> <filename-renamed>
```

#### 9. 同步

```bash
# 从该 Git 远程获取所有分支
git fetch [alias]

# 将远程分支合并到当前分支以使其保持最新状态
git merge [alias]/[branch]

# 没有快进
git merge --no-ff [alias]/[branch]

# 仅快进
git merge --ff-only [alias]/[branch]

# 将本地分支提交传输到远程存储库分支
git push [alias] [branch]

# 从跟踪远程分支获取并合并任何提交
git pull

# 将另一个分支的一个特定提交合并到当前分支
git cherry-pick [commit_id]
```

#### 10. 远程

```bash
# 添加一个 git URL 作为别名
git remote add [alias] [url]

# 显示您设置的远程存储库的名称
git remote

# 显示远程存储库的名称和 URL
git remote -v

# 删除远程存储库
git remote rm [remote repo name]

# 更改 git repo 的 URL
git remote set-url origin [git_url]
```

#### 11. 跟踪路径更改

```bash
# 从项目中删除文件并暂存删除以进行提交
git rm [file]

# 更改现有文件路径并暂存移动
git mv [existing-path] [new-path]

# 显示所有提交日志，并指示任何移动的路径
git log --stat -M
```

### 网络设置

#### 1. 配置HTTP/HTTPS代理

```bash
# 全局配置（所有仓库生效）
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890

# 仅当前仓库配置（进入仓库目录执行）
git config http.proxy http://127.0.0.1:7890
git config https.proxy https://127.0.0.1:7890
```

#### 2. 取消代理

```bash
# 取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 取消当前仓库代理
git config --unset http.proxy
git config --unset https.proxy

# 一键清空所有全局代理
git config --global --remove-section http
git config --global --remove-section https
```

#### 3. 查看当前网络配置

```bash
# 查看所有全局配置
git config --global --list

# 仅查看网络相关配置
git config --global --list | grep proxy
```

#### 4.  HTTP传输缓冲区

```bash
# 全局设置 512MB 缓冲区（提升大文件传输速度）
git config --global http.postBuffer 524288000

# 查看当前缓冲区配置
git config --list
```

