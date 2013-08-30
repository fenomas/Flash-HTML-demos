4. HTML5 game level editor
----
（日本語は下にあります。）

A simple demo of using Flash as a game level editor. In this case, platformer game elements are laid out on the stage, then a custom script exports them as images and metadata, which are then read into a simple Coco2d platform game.

You can see the demo results [here][1].

 1. Start Flash and open **level.fla**
 1. The stage has several movieclips representing platformer game elements, which you can move around, resize, duplicate etc..
 3. Open exporter.jsfl in Flash (for editing)
 4. Run the JSFL script by clicking the `Play` button in the JSFL script window
 5. The exporter script will create (or overwrite) files in the **/levelData** folder: several image and one JSON file.
 7. The /build folder contains a simple Cocos2d-html5 platform game which loads in the game data you just exported, so you can now view the results in **/build/index.html**.  
    (Depending on your browser and OS, cocos2d projects probably won't display if you view them as local files. In this case, use a local http server like MAMP, or upload the files to a server.)

---

Flashをプラットフォーマーゲームのレベルエディターとして使う簡単なデモです。 ステージ上にあるムービークリップ達を元にして、JSFLで画像とメタデータを書き出す。そして事前にできているCocos2dの簡単プロジェクトがそのメタデータを読み込んで、ゲームを表示するデモです。

デモの結果は[こちら][1]で見れます。

 1. Flashを起動して **level.fla** を開く
 2. ステージにあるいくつかのムービークリップはプラットフォーマーゲームのパーツになる。自由にポジションとかスケールとか調整できます。
 2. **exporter.jsfl** を開く。（編集用に）
 2. JSFLのスクリプトパネルにある`実行`ボタンをクリック。
 2. エキスポーターが画像とJSONデータを **levelData** フォルダに書き出す。
 2. そのレベルデータを参照する簡単なCocos2Dのプラットフォーマーゲームが **/build/** フォルダにできているので、
  **/build/index.html** を開くとゲームを確認できます。
    （ブラウザとOSによって、Cocos2d-html5のプロジェクトをローカルファイルとして動作しないことはあります。
その場合、ローカルのhttpサーバー（MAMPなど）、もしくは外部のウェブサーバーで確認する必要があります。）


  [1]: http://andyhall.github.io/Flash-HTML-demos/4-flash-cocos-level/build/
  






