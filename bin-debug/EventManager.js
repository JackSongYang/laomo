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
var EventManager = (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        var _this = _super.call(this) || this;
        _this.GOTO_INDEX = "GOTO_INDEX";
        _this.GOTO_GAME = "GOTO_GAME";
        _this.GOTO_XINXI = "GOTO_XINXI";
        _this.GOTO_PAGE1 = "GOTO_PAGE1";
        _this.GOTO_PAGE2 = "GOTO_PAGE2";
        _this.GOTO_PAGE3 = "GOTO_PAGE3";
        _this.GOTO_PAGE4 = "GOTO_PAGE4";
        _this.GOTO_PAGE5 = "GOTO_PAGE5";
        _this.GOTO_END = "GOTO_END";
        _this.GOTO_RANK = "GOTO_RANK";
        return _this;
    }
    return EventManager;
}(egret.DisplayObjectContainer));
__reflect(EventManager.prototype, "EventManager");
//# sourceMappingURL=EventManager.js.map