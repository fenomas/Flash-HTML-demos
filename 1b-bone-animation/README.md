1b. Bone Animation | ボーンアニメーション
----

（日本語は下にあります。）

A trivial example of converting a Flash animation to a bone animation (that is, a sprite sheet where the animation graphics are split into movable parts, rather than frame-by-frame).

1. Get the Dragon Bones extension panel from http://dragonbones.github.io/
1. Double-click the .zxp file and install via the Extension Manager.
2. Start Flash and open Dragon.fla
3. In the top menu, select **Window > Extensions > DragonBonesDesignPanel**
4. In the DragonBones panel, select `Import`
5. Set the import settings to "All Library items" and hit `OK`
6. You can now check the animations, adjust timing, etc. The DB documentation has the details.
7. When finished, click the `Export` button and choose an export format.  The coolest one is `PNG (XML Merged)`, in which case the sprite sheet's metadata will be written into the PNG itself.
9. Hit `OK`, and your bone animation files will be exported.

---

Flashアニメーションをボーンアニメーションに変換する激簡単な例です。ボーンアニメーションというのは、アニメーションがコマ毎ではなくてパーツ毎に分解されるスプライトシートのことです。

1. DragonBones の拡張パネルを http://dragonbones.github.io/ から入手。
1. .zxp ファイルをダブルクリックして、Extension Manager でインストールする。
2. Flash を起動して Dragon.fla を開く。
3. トップメニューで、「ウィンドウ → エクステンション → DragonBonesDesignPanel」を選択する。
4. DragonBonesのパネルでにあるプルダウンメニューで、言語を日本語に設定できる。
1. パネルで`読み込み`を選択。
5. 読み込み設定を「全てのライブラリアイテム」に設定して、`OK`を選択。
6. アニメーションのタイミング等をパネルで調整できます。詳しくにはDragonBonesのドキュメンテーションまで。
7. `書き出し`を選択して、フォーマットを選ぶ。最もすごいのは、`PNG（XML結合）`です。そうすると、アニメーションのメタデータがPNGのヘッダーに書き込まれる。
9. `OK`を選択して、ボーンアニメーションのファイルが出来上がある。


