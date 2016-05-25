---
layout: article
title: Git Cheat Sheet
category: learning-note
css: <link rel="stylesheet" href="/assets/css/learning-note.css"/>
---

| [Git Clone](https://git-scm.com/docs/git-clone) | Description |
|:------------------------------------------------|:------------|
| `git clone <url>` | Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository |

| [Git Remote](https://git-scm.com/docs/git-remote) | Description |
|:--------------------------------------------------|:------------|
| `git remote -v` | Be a little more verbose and show remote url after name |
| `git remote add <name> <url>` | Adds a remote named <name> for the repository at <url> |

| [Git Status](https://git-scm.com/docs/git-status) | Description |
|:--------------------------------------------------|:------------|
| `git status` | Displays paths that have differences between the index file and the current `HEAD` commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by Git |

| [Git Diff](https://git-scm.com/docs/git-diff) | Description |
|:----------------------------------------------|:------------|
| `git diff` | Show changes between the working tree and the index or a tree, changes between the index and a tree, changes between two trees, changes between two blob objects, or changes between two files on disk. |

| [Git Add](https://git-scm.com/docs/git-add) | Description |
|:--------------------------------------------|:------------|
| `git add <file>` | Updates the index using the current content found in the working tree, to prepare the content staged for the next commit |

| [Git Commit](https://git-scm.com/docs/git-commit) | Description |
|:--------------------------------------------------|:------------|
| `git commit` | Store the current contents of the index in a new commit |
| `git commit --amend` | Replace the tip of the current branch by creating a new commit |

| [Git Pull](https://git-scm.com/docs/git-pull) | Description |
|:----------------------------------------------|:------------|
| `git pull` | Incorporates changes from a remote repository into the current branch <br/> *Note* : The shorthand for `git fetch` followed by `git merge FETCH_HEAD` |

| [Git Push](https://git-scm.com/docs/git-push) | Description |
|:----------------------------------------------|:------------|
| `git push` | Updates remote refs using local refs |

#### Reference

1. [Pro Git Book English](https://git-scm.com/book/en/v2)
2. [Pro Git Book 繁體中文](https://git-scm.com/book/zh-tw/v1)