# jquery-textColorChange


## デモページ
[Demo page - scrollAddClass](https://www.azure-eyed-cat.com/demo/2017/06/)


## 使い方
- headerにjQuery本体とimagesLoadedのプラグイン、本プラグインを読み込み  
- 本プラグインを呼び出す為のjsファイルを用意し、headerのプラグイン用のファイルの後若しくはページの下部にjsを設置
- 追加したclassで動作させるためのcssファイルを用意


## 使用例
文字色を青に変更させたい場合
### js
```
// optionのcolorNameには色を変更するのに追加するクラス名を記述
// devideHeightは画面の高さを割る数
// timeoutは実行までの待機時間
// delayは一文字ずつ色を変更していく時間の間隔
var $el1 = $('#js-el1');
var el1Options = {
  colorName: 'color-blue',
  devideHeight: 2,
  delay: 200,
  timeout: 800
}
$el1.textColorChange(el1Options);
// 要素が画面の高さの1/2まで移動して800ms後に200ms間隔でテキストの色を変えていく
```

### css
```
.main .color-blue {
  color: blue;
}

```


## 併用しているプラグイン
画面の高さを正確に測る為、imagesLoadedというjQueryプラグインを併用しています。


### imagesLoaded
imagesLoaded is released under the [MIT License](http://desandro.mit-license.org/). Have at it.
