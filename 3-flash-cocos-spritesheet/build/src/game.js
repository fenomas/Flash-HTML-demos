
var LayerStart = cc.Layer.extend({
    
    spriteFrameName: "Player インスタンス ",
    spriteFrameStart: 10000,
    spriteFrameEnd: 10029,
    
    ctor: function() {
        this._super();

        // cache spritesheet
        var cache = cc.SpriteFrameCache.getInstance();
        cache.addSpriteFrames( p_run, s_run );
        
        // create the animation
        var name = this.spriteFrameName + this.spriteFrameStart;
        var sprite = cc.Sprite.createWithSpriteFrameName(name);
        sprite.setPosition( cc.p(200,200) );
        this.addChild(sprite);
        
        var animation = new cc.Animation.create();
        for (i=this.spriteFrameStart; i <= this.spriteFrameEnd;  i++) {
            var name = this.spriteFrameName + i;
            var fr = cc.SpriteFrameCache.getInstance().getSpriteFrame(name);
            animation.addSpriteFrame(fr);
        }
        animation.setDelayPerUnit(1/20); // fps
        animation.setLoops(1e10);
        
        var action = cc.Animate.create(animation);
        var func = cc.CallFunc.create( function() { console.log('done'); } );
        var sequence = cc.Sequence.create(action, func );
        
        sprite.runAction(sequence);
        
    },
    
    
    
});


var SceneStart = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.addChild(new LayerStart);
    }
});

