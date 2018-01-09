'use strict';

let loading = document.querySelector('.is-loading');
let content = document.querySelector('.content');
let imgCnt = 0;
let Img = [];
let IMG = [
  'images/bg-top01.jpg','images/bg-top02.jpg','images/bg-top03.png','images/bg-top04.png','images/bg.jpg','images/sec1-txt.png','images/sec1-txt.png',
  'images/sec2-Mttl.png','images/sec2-ttl01.png','images/sec2-ttl02.png',
  'images/sec2-ttl03.png','images/sec2-ttl04.png','images/sec2-ttl05.png',
  'images/sec2-ttl06.png','images/vibes.png','images/sec2-Mttl.png',
  'images/sec3-img01.png','images/sec3-ttl01.png','images/sec3-img02.png',
  'images/sec4-img01.png','images/sec4-ttl01.png','images/sec4-ttl02.png',
  'images/sec4-ttl03.png','images/sec4-ttl04.png','images/sec4-ttl05.png',
  'images/sec4-ttl06.png','images/sec4-img02.png','images/sec5-bg01.png',
  'images/sec5-ttl01.png','images/sec5-bg02.png','images/sec5-bg03.jpg',
  'images/sec6-bg01.png','images/sec6-bg02.png','images/sec6-ttl01.png',
  'images/sec6-img01.png'
];

window.addEventListener('DOMContentLoaded', function(){
  setTimeout(stopload, 10000);

  for(let i = 0; i < IMG.length; i++){
    Img[i] = new Image();
    Img[i].src = IMG[i];
    Img[i].onload = function() {
    imgCnt++;
    if(imgCnt === IMG.length) loaded();
  };
}

/*load comp*/
//--------------------------------------------------------------------------
function loaded() {
  let wrap = document.querySelector('.wrap');
  let footer = document.querySelector('footer');
  let header = document.querySelector('header');
  let top = document.querySelector('.top');
    TweenMax.to(loading, .8, {
      y: -2000,
      x: 0,
      delay: 0,
      ease: Power4.easeOut,
      onComplete: function(){
        if(content) {
          content.classList.add('is-block');
        }
        loading.classList.add('is-none');
        if(top) {
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
                  });
                }
              });
            }
          });
          }
          });
        } else {
          wrap.classList.add('is-block');
          footer.classList.add('is-block');
          TweenMax.to('.wrap', 1,{
            opacity:1,
            ease:Power4.easeOut
          });
        }
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
  if(top) {
    top.classList.add('is-noOpaciy');
    topInner.classList.add('is-noOpaciy');
  }
}
