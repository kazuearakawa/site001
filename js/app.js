window.addEventListener('DOMContentLoaded', function(){
  let imgCnt = 0;// 読み込んだ数カウント
  let Img = [];// イメージオブジェクト
  let IMG = [
    'images/bg-top01.jpg','images/bg-top02.jpg','images/bg-top03.png','images/bg-top04.png','images/bg.jpg','images/sec1-txt.png','images/sec1-txt.png',
    'images/sec2-Mttl.png','images/sec2-ttl01.png','images/sec2-ttl02.png',
    'images/sec2-ttl03.png','images/sec2-ttl04.png','images/sec2-ttl05.png',
    'images/sec2-ttl06.png','images/vibes.png','images/sec2-Mttl.png'
  ];
    console.log(imgCnt + " / " + IMG.length);// 何枚中何枚目かを表示


  for(let i = 0; i < IMG.length; i++){
    Img[i] = new Image();
    Img[i].src = IMG[i];
    Img[i].onload = function() {//1枚の画像が読み込み完了したら呼び出し
    imgCnt++;// 読み込んだカウントアップ
    console.log(imgCnt + " / " + IMG.length);// 何枚中何枚目かを表示

  if(imgCnt === IMG.length) loaded();// カウントと画像数が一緒になったら実行
  };
}
// ロード完了時に呼び出し
function loaded() {

  TweenMax.to('.top-inner', 1, {
    opacity: 1,
    y: -300,
    x: 0,
    delay: 0.5,
    ease: Power4.easeOut,
    onStart: () =>{

      TweenMax.to('.top-bg', 1, {
  			opacity: 1,
  			ease: Power0.easeOut,
         onComplete: function(){
          console.log('hoge');
        }
      });
    }
  });


  };
});

/*load error*/
//--------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function(){
    setTimeout(stopload, 10000);
  });
   function stopload() {
     console.log('10秒経過後にopacityを強制的に1へしたりする');
     }
