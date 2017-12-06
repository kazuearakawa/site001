// window.addEventListener('DOMContentLoaded', function(){
//   let imgCnt = 0;// 読み込んだ数カウント
//   let Img = [];// イメージオブジェクト
//   let IMG = [
//   'img/title_01.png','img/title_02.png','img/title_03.png','img/btn-top.png','images/thumb01.jpg','images/thumb02.jpg','images/thumb03.jpg','images/thumb04.jpg','images/thumb05.jpg','images/thumb06.jpg','images/thumb07.jpg','images/thumb08.jpg','images/thumb09.jpg','images/thumb10.jpg','images/thumb_floormap.jpg','img/town.jpg'
//   ];
//   console.log(imgCnt + " / " + IMG.length);// 何枚中何枚目かを表示

//   for(let i = 0; i < IMG.length; i++){
//   Img[i] = new Image();
//   Img[i].src = IMG[i];
//   Img[i].onload = function() {//1枚の画像が読み込み完了したら呼び出し
//   imgCnt++;// 読み込んだカウントアップ
//   console.log(imgCnt + " / " + IMG.length);// 何枚中何枚目かを表示

//   if(imgCnt === IMG.length) loaded();// カウントと画像数が一緒になったら実行
//   };
// }
// // ロード完了時に呼び出し
// function loaded() {
//   console.log('animationさせたい場合の処理の記述');
//   };
// });

// /*load error*/
// //--------------------------------------------------------------------------
// window.addEventListener('DOMContentLoaded',function(){
//     setTimeout(stopload, 10000);
//   });
//    function stopload() {
//      console.log('10秒経過後にopacityを強制的に1へしたりする');
//      }







