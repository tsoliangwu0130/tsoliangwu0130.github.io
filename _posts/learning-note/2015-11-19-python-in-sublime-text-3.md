---
layout: article
title: Pyhton in Sublime Text 3
category: learning-note
css: <link rel="stylesheet" href="/assets/css/learning-note.css"/>
---

在編寫程式碼的工具選擇上，許多人常使用 Sublime Text 作為首選的文字編輯器，而 Sublime Text 也的確提供了相當舒適的編碼環境。然而，由於 Sublime Text 本質上終究不是一個 IDE，許多 IDE 內建強大的輔助功能在 Sublime Text 上必須自己另外安裝。

這篇筆記主要以在 Sublime Text 3 下開發 Python 的環境為主。在這篇筆記中，我紀錄了如何在 Sublime Text 3 上安裝 SublimeLinter 與 SublimeCodeIntel 這兩個 Python 輔助插件。

SublimeLinter 一直以來都是 Package Control 中排名中居於第一位的程式碼語法檢查器。SublimeLinter 除了可以即時幫多種語言即時偵錯，也可以有效提醒使用者一些好的編碼習慣。而 SublimeCodeIntel 則提供了相當完善的語法提示。在開發程式的過程中，SublimeCodeIntel 會在使用者輸入關鍵字時給予適當提示以減少編碼時錯誤發生的機率。這篇筆記會使用 Package Control 來進行插件安裝，若尚未安裝 Package Control 請先點擊連結安裝。

---

`$ sudo pip install flake8`

![My helpful screenshot](/images/pic04.jpg)