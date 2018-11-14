class Bgmusic extends egret.Sprite {
  public constructor (stageW: number, stageH: number) {
    super()
    this.stageW = stageW;
    this.stageH = stageH;
    this.createGameScene();
  }

  private stageW: number;
  private stageH: number;
  // private static instance;
  private musicS: egret.Bitmap;
  private musicP: egret.Bitmap;
  private audioStatus: string;
  private _sound: egret.Sound;
  private _channel: egret.SoundChannel;
  private _pauseTime: number;

  private createGameScene () {
    
    for (var key in this) {
      console.log('key: ' + key);
      console.log('value: ' + this[key]);
      console.log(' ');
    }

    let sound: egret.Sound = this._sound = new egret.Sound();
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
  }

//   private enter () {
//     if (this.audioStatus === "playing") {
//       this.manageState(this.audioStatus);
//       this.removeEventListener(egret.Event.ENTER_FRAME, this.enter, this);
//     }
//   }

//   private manageState (e) {
//     this.musicS.visible = false;
//     if (e === 'playing') {
//       this.musicP.visible = true;
//       this.musicP.rotation = 0;
//       egret.Tween.get(this.musicP, {
//         loop: true
//       }).to({
//         rotation: 360
//       }, 4e3)
//     } else {
//       this.musicS.visible = true;
//     }
//     this.musicS.touchEnabled = true;
//     this.musicP.touchEnabled = true;
//     this.musicP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickMusicBtn, this);
//     this.musicS.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickMusicBtn, this);
//   }

//   private onClickMusicBtn (e) {
//     if ("playing" === this.audioStatus) {
//       this.audioStatus = "pause";
//       this._pauseTime = this._channel.position;
//       this._channel.stop();
      
//       this.musicS.visible = true;
//       this.setChildIndex(this.musicS, 999);
//       this.musicP.visible = false;
//       egret.Tween.removeTweens(this.musicP);
//       this.musicP.rotation = 0;
//     } else {
//       this.audioStatus = "playing";
//       this._channel = this._sound.play(this._pauseTime);

//       this.musicS.visible = false;
//       this.musicP.visible = true;
//       this.setChildIndex(this.musicP, 999);
//       this.musicP.rotation = 0;
//       egret.Tween.get(this.musicP, {
//         loop: true
//       }).to({
//           rotation: 360
//         }, 4e3)
//     }
//   }

//   // public static getInstance () {  
//   //    return this.instance || (this.instance = new Bgmusic()),
//   //       this.instance
//   // }

//   private startPlay () {
//     this._channel = this._sound.play();
//     this.musicS.visible = false;
//     this.musicP.visible = true;
//     this.setChildIndex(this.musicP, 999);
//     this.musicP.rotation = 0;
//     egret.Tween.get(this.musicP, {
//       loop: true
//     }).to({
//         rotation: 360
//       }, 4e3)
//   }

//   private stopPlay () {
//     this._pauseTime = this._channel.position;
//     this._channel.stop();
//     this.musicS.visible = true;
//     this.setChildIndex(this.musicS, 999);
//     this.musicP.visible = false;
//     egret.Tween.removeTweens(this.musicP);
//     this.musicP.rotation = 0;
//   }
}
