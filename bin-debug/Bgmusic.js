var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Bgmusic = (function (_super) {
    __extends(Bgmusic, _super);
    function Bgmusic(stageW, stageH) {
        var _this = _super.call(this) || this;
        _this.stageW = stageW;
        _this.stageH = stageH;
        _this.createGameScene();
        return _this;
    }
    Bgmusic.prototype.createGameScene = function () {
        for (var key in this) {
            console.log('key: ' + key);
            console.log('value: ' + this[key]);
            console.log(' ');
        }
        var sound = this._sound = new egret.Sound();
        sound.load('../resource/assets/music.mp3');
        this.musicS = RES.getRes("musicStop_png");
        this.musicS.touchEnabled = !0;
        this.musicS.anchorOffsetX = this.musicS.width / 2;
        this.musicS.anchorOffsetY = this.musicS.height / 2;
        this.musicS.x = this.stageW - this.musicS.width;
        this.musicS.y = this.musicS.height;
        this.musicS.visible = false;
        // this.addChild(this.musicS);
        this.musicP = RES.getRes("musicPlay_png");
        this.musicP.touchEnabled = true;
        this.musicP.anchorOffsetX = this.musicP.width / 2;
        this.musicP.anchorOffsetY = this.musicS.height / 2;
        this.musicP.x = this.stageW - this.musicP.width;
        this.musicP.y = this.musicP.height;
        this.musicP.visible = false;
        // this.addChild(this.musicP);
        this.musicS.visible = true;
        // this.manageState(this.audioStatus);
        // this.addEventListener(egret.Event.ENTER_FRAME, this.enter, this);
    };
    return Bgmusic;
}(egret.Sprite));
__reflect(Bgmusic.prototype, "Bgmusic");
//# sourceMappingURL=Bgmusic.js.map