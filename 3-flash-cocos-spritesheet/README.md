3. cocos2D-HTML5 and Sprite Sheets
----

（日本語は下にあります。）

A simple example of exporting a Flash animation as a sprite sheet, and playing it back with the [Cocos2d-html5][1] framework.

 1. Start Flash and open runner.fla
 1. Right-click **runner** movieclip on stage
 1. Select `Generate Sprite Sheet`
 4. In the dialog, set "Data format" to **cocos2D v3**
 1. Confirm other settings and hit `Export`
 6. Two files, a PNG and a PLIST, will be created. Copy them to the resource directories for the project:  
     /build/res/Normal  
     /build/res/HD
7. Check the animation by viewing /build/index.html  in a browser.  
    (Depending on your browser and OS, cocos2d projects probably won't display if you view them as local files. In this case, use a local http server like MAMP, or upload the files to a server.)

You can see the final result [here][2].

---

Flashアニメーションをスプライトシートとして書き出して、[Cocos2d-html5][1]フレームワークで再生する簡単なデモ。

 1. runner.fla を開く
 1. ステージにある「runner」のムービークリップに右クリック
 1. `スプライトシートを生成`を選択
 1. ダイヤログで「データ形式」を **cocos2D v3** に設定する。
 1. その他の設定を確認して、`書き出し`を選択。
 1. ファイルが２つ、PNGとPLISTが出来上がる。２つともを、Cocos2Dプロジェクトのリソースフォルダにコピーする：  
     /build/res/Normal  
     /build/res/HD
　7. アニメーションを確認するには、 /build/index.html をブラウザで確認できます。   
    （ブラウザとOSによって、Cocos2d-html5のプロジェクトをローカルファイルとして動作しないことはあります。
その場合、ローカルのhttpサーバー（MAMPなど）、もしくは外部のウェブサーバーで確認する必要があります。）

出来上がったアニメーションは[こちら][2]で見れます。


  [1]: http://www.cocos2d-x.org/projects/cocos2d-x/wiki/Cocos2d-html5
  [2]: http://htmlpreview.github.com/?https://github.com/andyhall/Flash-HTML-demos/blob/master/3-flash-cocos-spritesheet/build/index.html
  




