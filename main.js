$(() => {

  $('.element').each(function () {
    const countBox = $(this).children('.count');
    const start = $(this).children('.start-btn');
    const stop = $(this).children('.stop-btn');
    const reset = $(this).children('.reset-btn');
    const display = $(this).children('.display');
    
    //タイマーの秒数
    let setTime = countBox.data('time');
    //一時停止した時の秒数
    let poseTime = setTime;
    //残りの秒数
    let timeLeft = setTime;
    //setIntervalのための変数
    let testTimer;
    //分を表示する
    let minutes;
    //秒を表示する
    let seconds;

    //残りの秒数を表示する関数
    const displayText = () => {
      minutes = Math.floor(timeLeft / 60);
      seconds = timeLeft % 60;
      if (String(minutes).length == 1)
        minutes = "0" + String(minutes)
      if (String(seconds).length == 1)
        seconds = "0" + String(seconds)
      display.text(minutes + ":" + seconds);
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
      testTimer = setInterval(function () {
        if (timeLeft <= 0)
          clearInterval(testTimer);
        else
          countDown();
      }, 1000);
      return;
    };

    displayText();

    //ボタンを押したらカウントダウンスタート
    start.on('click', () => {
      stopCount();
      timeLeft = poseTime;
      displayText();
      timerStart();
    });
    //ボタンを押したらカウントストップ
    stop.on('click', () => {
      stopCount();
    });
    //ボタンを押したらカウントリセット
    reset.on('click', () => {
      stopCount();
      timeLeft = poseTime = setTime;
      displayText();
    });
  })
});