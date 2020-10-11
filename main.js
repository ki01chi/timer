$(() => {

  const countBox = $('#countBox');
  const start = $('#start');
  const stop = $('#stop');
  const reset = $('#reset');
   
    //タイマーの秒数
    let setTime = 10;
    //一時停止した時の秒数
    let poseTime = setTime;
    //残りの秒数
    let timeLeft = setTime;
    //setIntervalのための変数
    let testTimer;
  
  
    //ミリ秒を分に変換________________________________________
    // function computeDuration(ms){
    //   let h = String(Math.floor(ms / 3600000) + 100).substring(1);
    //   console.log(String(Math.floor(ms / 3600000) + 100).substring(1));
  
    //   let m = String(Math.floor((ms - 0 * 3600000)/60000)+ 100).substring(2);
  
    //   console.log(String(Math.floor((ms - 0 * 3600000)/60000)+ 100).substring(2));
  
    //   let s = String(Math.round((ms - 0 * 3600000 - m * 60000)/1000)+ 100).substring(1);
      
    //   console.log(String(Math.round((ms - 0 * 3600000 - m * 60000)/1000)+ 100).substring(1))
  
    //   return m + ':' + s;
    // }
    
    // let compute = computeDuration(360000);
    //__________________________________________________________
  
    //残りの秒数を表示する関数
    const displayText = () => {
      countBox.text(timeLeft);
    };
    
    //1ずつカウントダウンする関数
    const countDown = () => {
      timeLeft--;
      poseTime = timeLeft;
      displayText();
    };
  
    //カウントをストップする関数
    const stopCount = () => {
      clearInterval(testTimer);
    };
  
    //1000ミリ秒ごとに処理を繰り返す関数
    const timerStart = () => {
      
      testTimer = setInterval(function() {
        if(timeLeft <= 0) {
          clearInterval(testTimer);
        }      
        else {
          countDown();
        }
      }, 1000);
  
      return;
    };
  
  //_____________________________________________________
  
    displayText();
  
    //ボタンを押したらカウントダウンスタート
    start.on('click', () => {
      stopCount();
      timeLeft = poseTime;
      console.log(poseTime);
      console.log(timeLeft);
      displayText();
      timerStart();
      console.log(poseTime);
      console.log(timeLeft);
    });
  
    stop.on('click', () => {
      stopCount();
    });
  
    reset.on('click', () => {
      stopCount();
      timeLeft = poseTime = setTime;
      displayText();
    });
  
  });