---
layout: article
title: Git Cheat Sheet
category: learning-note
css: <link rel="stylesheet" href="/assets/css/learning-note.css"/>
---

| [git reference](https://git-scm.com/book/en/v2/Git-Internals-Git-References) | Description |
|:-----------------------------------------------------------------------------|:------------|
| `HEAD` | the latest commit just be made |
| `HEAD^` or `HEAD~1` | the previous commit before the latest commit |
| `HEAD~<n>` | the previous $$n$$ commit before the latest commit |

| [git clone](https://git-scm.com/docs/git-clone) | Description |
|:------------------------------------------------|:------------|
| `git clone <url>` | Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository |

| [git-remote](https://git-scm.com/docs/git-remote) | Description |
|:--------------------------------------------------|:------------|
| `git remote -v` | show remote urls verbosely |
| `git remote add <remote> <url>` | Add \<remote\> for the repository at \<url\> |

| [git-status](https://git-scm.com/docs/git-status) | Description |
|:--------------------------------------------------|:------------|
| `git status` | Show files status |

| [git-log](https://git-scm.com/docs/git-log) | Description |
|:--------------------------------------------|:------------|
| `git log` | Show the commits log |

| [git-diff](https://git-scm.com/docs/git-diff) | Description |
|:----------------------------------------------|:------------|
| `git diff` | Show differences between files or certain commits |

| [git-init](https://git-scm.com/docs/git-init) | Description |
|:----------------------------------------------|:------------|
| `git init` | Create an empty Git repository under current directory|

| [git-add](https://git-scm.com/docs/git-add) | Description |
|:--------------------------------------------|:------------|
| `git add <file>` | Stage \<file\> and be ready to commit |

| [git-rm](https://git-scm.com/docs/git-rm) | Description |
|:--------------------------------------------|:------------|
| `git rm <file>` | Remove \<file\> from the working tree and the index |

| [git-commit](https://git-scm.com/docs/git-commit) | Description |
|:--------------------------------------------------|:------------|
| `git commit` | Commit staged files |
| `git commit --amend` | Modify the latest commit |

| [git-pull](https://git-scm.com/docs/git-pull) | Description |
|:----------------------------------------------|:------------|
| `git pull` | Get all changes from a remote repository into the current branch <br/> *Note* : The shorthand for `git fetch` followed by `git merge FETCH_HEAD` |

| [git-push](https://git-scm.com/docs/git-push) | Description |
|:----------------------------------------------|:------------|
| `git push` | Updates remote refs using local refs |
| `git push <remote> <branch>` | Push commits to a \<remote\> \<branch\> |

| [git-branch](https://git-scm.com/docs/git-branch) | Description |
|:--------------------------------------------------|:------------|
| `git branch` | List all existing branches |
| `git branch -d <branch>` | Delete \<branch\> |

| [git-checkout](https://git-scm.com/docs/git-checkout) | Description |
|:------------------------------------------------------|:------------|
| `git checkout <branch>` | Switch to \<branch\> |
| `git checkout -b <branch>` | Create a new branch \<branch\> if not existing yet, then check out to the branch |

| [git-merge](https://git-scm.com/docs/git-merge) | Description |
|:------------------------------------------------|:------------|
| `git merge <branch>` | Merge \<branch\> to current branch |

| [git-reset](https://git-scm.com/docs/git-reset) | Description |
|:------------------------------------------------|:------------|
| `git reset HEAD^` | Cancel the current commit and back to the previous revision |

| [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) | Description |
|:------------------------------------------------------------|:------------|
| `git cherry-pick <commit>` | Apply the changes from existing commits |

#### Reference

1. [Pro Git Book English](https://git-scm.com/book/en/v2)
2. [Pro Git Book 繁體中文](https://git-scm.com/book/zh-tw/v1)