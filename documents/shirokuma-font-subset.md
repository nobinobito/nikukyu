# Shirokumaフォントのサブセット再生成手順

## 概要

サイトでは表示速度のため、Shirokumaの元フォントではなく、サイト内で使用する文字だけを含むサブセットフォントを読み込んでいます。

- 元フォント: `resources/001Shirokuma-Regular.woff2`
- 配信するサブセット: `public/fonts/001Shirokuma-Regular-subset.woff2`
- 読み込み設定: `src/app/fonts.ts`

Shirokumaを指定した箇所に新しい文字（例: `チョキ`）を追加した場合は、サブセットを再生成してください。再生成しないと、ブラウザはその文字だけ別のフォントで表示します。

## 再生成手順

プロジェクトのルートディレクトリで、以下を順番に実行します。

```sh
rg --no-filename -o \
  --glob '*.ts' \
  --glob '*.tsx' \
  '[ぁ-んァ-ン一-龯々〆〤ー・「」『』（）［］【】、。！？〜…]' \
  src > /tmp/nikukyu-shirokuma.txt

printf '\nhair salonにくきゅうチョキ\n' >> /tmp/nikukyu-shirokuma.txt

pyftsubset resources/001Shirokuma-Regular.woff2 \
  --output-file=public/fonts/001Shirokuma-Regular-subset.woff2 \
  --flavor=woff2 \
  --text-file=/tmp/nikukyu-shirokuma.txt \
  --layout-features='*'
```

2つ目のコマンドでは、ロゴの `hair salon にくきゅう` と、ソースコードの自動抽出では漏れる可能性がある文字を追加しています。新たにShirokumaで表示する文字があれば、`チョキ` の後ろに追記してください。

例: `わんこ` も追加する場合

```sh
printf '\nhair salonScrollにくきゅうチョキわんこ\n' >> /tmp/nikukyu-shirokuma.txt
```

## 確認

再生成後に、以下を実行します。

```sh
npm run lint
npm run build
```

ブラウザでも対象の文字がShirokumaで表示されていることを確認してください。

## 必要なコマンド

この手順には [fonttools](https://fonttools.readthedocs.io/) の `pyftsubset` を使用します。開発環境では `pyftsubset` が利用可能です。利用できない環境では、Pythonのfonttoolsをインストールしてから実行してください。
