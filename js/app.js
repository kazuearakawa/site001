'use strict';
window.addEventListener('DOMContentLoaded', function(){
  setTimeout(stopload, 10000);
  let loading = document.querySelector('.is-loading');
  let content = document.querySelector('.content');
  let imgCnt = 0;// 読み込んだ数カウント
  let Img = [];// イメージオブジェクト
  let IMG = [
    'images/bg-top01.jpg','images/bg-top02.jpg','images/bg-top03.png','images/bg-top04.png','images/bg.jpg','images/sec1-txt.png','images/sec1-txt.png',
    'images/sec2-Mttl.png','images/sec2-ttl01.png','images/sec2-ttl02.png',
    'images/sec2-ttl03.png','images/sec2-ttl04.png','images/sec2-ttl05.png',
    'images/sec2-ttl06.png','images/vibes.png','images/sec2-Mttl.png'
  ];
    // console.log(imgCnt + " / " + IMG.length);// 何枚中何枚目かを表示

  for(let i = 0; i < IMG.length; i++){
    Img[i] = new Image();
    Img[i].src = IMG[i];
    Img[i].onload = function() {//1枚の画像が読み込み完了したら呼び出し
    imgCnt++;// 読み込んだカウントアップ
    // console.log(imgCnt + " / " + IMG.length);// 何枚中何枚目かを表示

  if(imgCnt === IMG.length) loaded();// カウントと画像数が一緒になったら実行
  };
}
// ロード完了時に呼び出し
function loaded() {
  let wrap = document.querySelector('.wrap');
  let footer = document.querySelector('footer');
  let header = document.querySelector('header');
    TweenMax.to(loading, .8, {
      y: -2000,
      x: 0,
      delay: 0,
      ease: Power4.easeOut,
      onComplete: function(){
        content.classList.add('is-block');
        loading.classList.add('is-none');
        TweenMax.to('.top', 1, {
         opacity: 1,
         ease: Power0.easeOut,
        onComplete: function(){
        TweenMax.to('.top-inner', 1, {
          opacity: 1,
          y: -300,
          x: 0,
          delay: 0.25,
          ease: Power4.easeOut,
          onStart: () =>{
            TweenMax.to('.top-bg', 1, {
              opacity: 1,
              ease: Power4.easeOut,
              onComplete: function(){
               wrap.classList.add('is-block');
               footer.classList.add('is-block');
               header.classList.remove('is-overflowHidden');
                TweenMax.to('.wrap', 1,{
                  opacity: 1,
                  ease: Power4.easeOut
                })
              }
            })
          }
        });
        }
        });
      }
      });
    }
  });

/*load error*/
//--------------------------------------------------------------------------
function stopload() {
  let top = document.querySelector('.top');
  let topInner = document.querySelector('.top-inner');
  let topBg = document.querySelector('.top-bg');
  top.classList.add('is-noOpaciy');
  topInner.classList.add('is-noOpaciy');
  topBg.classList.add('is-noOpaciy');
}
