document.addEventListener('DOMContentLoaded', function () {
    const startStopBtn = document.querySelector('#startStopBtn');
    const resetBtn = document.querySelector('#resetBtn');

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let timerInterval = null;
    let timerStatus = 'stopped';

    function stopwatch() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }

        let leadingSeconds = seconds < 10 ? '0' + seconds : seconds;
        let leadingMinutes = minutes < 10 ? '0' + minutes : minutes;
        let leadingHours = hours < 10 ? '0' + hours : hours;

        let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
    }

    startStopBtn.addEventListener('click', function () {
        if (timerStatus === "stopped") {
            timerInterval = window.setInterval(stopwatch, 1000);
            startStopBtn.innerHTML = '<i class="fas fa-pause" id="pause"></i>';
            timerStatus = "running";
        } else {
            window.clearInterval(timerInterval);
            startStopBtn.innerHTML = '<i class="fas fa-play" id="play"></i>';
            timerStatus = "stopped";
        }
    });

    resetBtn.addEventListener('click', function () {
        window.clearInterval(timerInterval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        timerStatus = 'stopped';
        startStopBtn.innerHTML = '<i class="fas fa-play" id="play"></i>';
        document.getElementById('timer').innerText = '00:00:00';
    });
});
