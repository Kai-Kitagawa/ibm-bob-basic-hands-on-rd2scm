# 要件定義からソース管理まで！IBM Bob基礎ハンズオン

IBM Bobを使って、実用的なFAQサイト作成をユースケースとして、要件定義から実装、コードレビュー、ソース管理までを一連の流れで体験するハンズオンです。
プログラミング経験は不要！AI駆動の開発アシスタント「IBM Bob」が、あなたの開発をサポートします。

## ⚠️ 注意事項

本ハンズオンは[IBM Bobワークショップ](https://github.com/IBM/japan-technology/blob/main/ibm-bob/bob-a-thon/basic/beginner/build-a-static-faq-site)をベースに、一部コンテンツを追加した構成です。
以前IBM Bobワークショップを体験された方は、一部内容が重複します。

## 🎯 ハンズオン概要

このハンズオンでは、IBM Bobの主要機能を実際に使いながら、FAQサイトの開発プロセスを体験します。

ソース管理にGitHubを利用しますが、GitHubの利用が環境上難しい場合でも、IBM Bobの基本的な使い方自体は体験可能です。

## 学べること

- IBM Bobの基本的な使い方と画面操作
- 要件定義書からの実装体験（Orchestratorモード）
- 既存コードの読み込みと追加機能開発（Codeモード）
- AIによるコードレビューの活用
- コミットメッセージ作成支援の活用
- プルリクエスト作成フローの体験
- 要件定義からソース管理までの開発効率を劇的に向上させるワークフロー

## 👥 対象者

- 最近IBM Bobを導入したが、まだ使い始めていない方
- IBM Bobの使い方を改めて学びたい方
- これからIBM Bobを導入予定の方
- IBM Bob導入を検討している技術担当者
- FAQサイト開発を題材に、AI駆動開発の流れを体験したい方

## ⏱️ 想定時間

**合計: 約75分**

| セクション | 内容 | 想定時間 |
|-----------|------|---------|
| **準備と設定** | IBM BobとGitHubの事前準備確認 | 10分 |
| **IBM Bobの画面構成** | 基本操作とインターフェースの理解 | 5分 |
| **Lab 1: 初期開発** | 要件定義書からFAQサイトを作成 | 20分 |
| **Lab 2: 機能開発** | 既存コードに追加機能を実装 | 15分 |
| **Lab 3: セキュリティ強化** | コードレビューと品質向上 | 10分 |
| **Lab 4: ソース管理** | コミットメッセージとプルリクエスト | 15分 |

## 📋 事前準備チェックリスト

ハンズオンを始める前に、以下の環境を準備してください：

### 必須

- **IBM Bob アカウント**
  - [30日間無料トライアル](https://bob.ibm.com/trial)から登録可能
  - 登録ガイドは[こちら](https://qiita.com/Asuka_Saito/items/c0c4b83a485351bd3412)を参照
- **Bob IDE** - [ダウンロードはこちら](https://bob.ibm.com/download)
- **Webブラウザ** - Chrome、Firefox、Safari、Edge等

### 任意（Lab 4のハンズオンで必要）

- **GitHub アカウント** - 作成ガイドは[こちら](https://docs.github.com/ja/get-started/start-your-journey/creating-an-account-on-github)を参照
- **Git** - セットアップガイドは[こちら](https://docs.github.com/ja/get-started/git-basics/set-up-git#setting-up-git)を参照

### 推奨環境

- **PC/Mac/Linux/Windows** - メモリ最低4GB、推奨8GB以上
- **インターネット接続** - 必須

## 📚 ハンズオンの構成

### 1️⃣ はじめに

IBM Bobの基礎を学び、開発環境を整えます。

- [準備と設定](/Docs/preparation-and-setup.md)
- [Bobのインターフェース](https://r-nakayamasan.github.io/bob-workshop-draft/02_bob_interface/)

### 2️⃣ ハンズオン

#### Lab 1: 要件定義書からの実装
**Orchestratorモードを使用**

要件定義書を元に、IBM BobがFAQサイトの基礎部分を自動生成します。HTML、CSS、JavaScriptファイルの作成から、デザインの実装まで、一連の開発プロセスを体験できます。

👉 [Lab 1を始める](https://r-nakayamasan.github.io/bob-workshop-draft/03_lab1/)

#### Lab 2: 既存コードの読み込みと機能追加
**Codeモードを使用**

Lab 1で作成したコードを読み込み、新しい機能を追加します。既存プロジェクトへの機能追加という、実務でよくあるシナリオを体験できます。

👉 [Lab 2を始める](https://r-nakayamasan.github.io/bob-workshop-draft/04_lab2/)

#### Lab 3: コードレビュー
**/reviewコマンドを使用**

IBM Bobの強力なコードレビュー機能を使って、セキュリティやパフォーマンスの問題を自動検出します。AIによる品質向上のプロセスを学びます。

👉 [Lab 3を始める](https://r-nakayamasan.github.io/bob-workshop-draft/05_lab3/)

#### Lab 4: ソース管理
**コミットメッセージ / プルリクエスト機能を使用**

Lab 3までで作成・改善した変更をもとに、コミットメッセージの作成支援とプルリクエスト作成の流れを体験します。

👉 [Lab 4を始める](/Docs/source-control-lab.md)

### 3️⃣ まとめ

- **[まとめと次のステップ](https://r-nakayamasan.github.io/bob-workshop-draft/06_summary/)** - 学んだことの振り返りと、さらなる活用方法

---

## 🆚 IBM Bobワークショップからの主な変更点

- 準備と設定にGitHubアカウント作成とFork手順の案内を追加
- Lab 3の後に、ソース管理を扱うLab 4を追加

---

## 📖 このハンズオンについて

**作成**: IBM Bob を使用して作成  
**更新**: 2026年5月  
**対象バージョン**: IBM Bob v1.0以降  
**ライセンス**: © 2026 IBM Corporation. All rights reserved.