---
layout: article
title: Git Cheat Sheet
category: learning-note
css: <link rel="stylesheet" href="/assets/css/learning-note.css"/>
---

| [Git Add](https://git-scm.com/docs/git-add) | Description |
|:-----------------|:---------------------------------------|
| `git add` | Updates the index using the current content found in the working tree, to prepare the content staged for the next commit |


| [Git Commit](https://git-scm.com/docs/git-commit) | Description |
|:--------------------------------------------------|:------------|
| `git commit` | Store the current contents of the index in a new commit |
| `git commit --amend` | Replace the tip of the current branch by creating a new commit |

| [Git Pull](https://git-scm.com/docs/git-pull) | Description |
|:----------------------------------------------|:------------|
| `git pull` | Incorporates changes from a remote repository into the current branch. <br/> *Note* : The shorthand for `git fetch` followed by `git merge FETCH_HEAD` |

| [Git Push](https://git-scm.com/docs/git-push) | Description |
|:----------------------------------------------|:------------|
| `git push` | Updates remote refs using local refs. |

#### Reference

1. [Pro Git Book English](https://git-scm.com/book/en/v2)
2. [Pro Git Book 繁體中文](https://git-scm.com/book/zh-tw/v1)