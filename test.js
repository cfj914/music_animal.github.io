document.addEventListener('DOMContentLoaded', function() {  
    const playButton = document.getElementById('playButton');  
    const audioPlayer = document.getElementById('audioPlayer');  
  
    // 设置定时器，使按钮在2秒后出现  
    setTimeout(function() {  
        playButton.classList.remove('hidden'); // 移除hidden类，使按钮可见  
    }, 2000);  
  
    // 添加点击事件监听器到开始按钮  
    playButton.addEventListener('click', function() {  
        // 播放音频  
        audioPlayer.play();  
  
        // 使按钮在点击后消失  
        playButton.classList.add('hidden'); // 添加hidden类，使按钮不可见  
    });  
});