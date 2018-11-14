class Tool {
  constructor (e) {

  }

  public createBitmapByName (e) {
    var t = new egret.Bitmap();
    var n = RES.getRes(e);
    return t.texture = n;
  }

  public createBitmapBySheet (e, t) {
    var n = new egret.Bitmap;
    var i = e.getTexture(t);
    return n.texture = i;
  }

  public loadTextureByBase64 (e, t, n) {
    var i = new Image();
    i.src = e;
    i.onload = function () {
      var e = new egret.Texture();
      e.bitmapData = new egret.BitmapData(i);
      t.call(n, e)
    }
  }

  public createButton (t, n, i, a, o, r, s, h, c) {
    void 0 === h && (h = 0), void 0 === c && (c = 0);
    var g = new egret.Sprite(),
      u = function () {
        g.removeEventListener(egret.TouchEvent.TOUCH_TAP, u, t);
        egret.Tween.get(g).to({
          scaleX: 1.1,
          scaleY: 1.1
        }, 400, egret.Ease.backOut).to({
          scaleX: 1,
          scaleY: 1
        }, 400, egret.Ease.backOut).call(function () {
          g.addEventListener(egret.TouchEvent.TOUCH_TAP, u, t)
        }, t);
        s(t)
      };
    g.addChild(this.createBitmapByName(n));
    g.x = i;
    g.y = a;
    g.width = o;
    g.height = r;
    g.touchEnabled = !0;
    g.anchorOffsetX = h;
    g.anchorOffsetY = c;
    g.addEventListener(egret.TouchEvent.TOUCH_TAP, u, t);
    return g;
  }
}