# にくきゅう 準備中サイト

ヘアサロン「にくきゅう」の正式オープン前に公開する、1ページ構成の準備中サイトです。

## 開発環境での起動

依存関係をインストール済みの場合は、次のコマンドで起動できます。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

初回セットアップ時は、先に依存関係をインストールしてください。

```bash
npm install
npm run dev
```

## 主な編集箇所

- `src/app/page.tsx`: トップページの本文、導線、SNSリンク
- `src/app/page.module.css`: ページ固有のレイアウトとデザイン
- `src/app/globals.css`: 全体の色、フォント、基本スタイル
- `src/app/layout.tsx`: メタデータ、OGP、ファビコン設定
- `public/nikukyu-logo.png`: `docs` 配下のロゴPDFから確認用に書き出したロゴ画像

## ビルド確認

本番用ビルドは次のコマンドで確認できます。

```bash
npm run build
```
