document.addEventListener("DOMContentLoaded", function() {
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const timerDisplay = document.getElementById("timer");
    let countdown;

    startButton.addEventListener("click", function() {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds > 0) {
            startCountdown(totalSeconds);
        }
    });

    function startCountdown(totalSeconds) {
        clearInterval(countdown);

        const endTime = Date.now() + totalSeconds * 1000;

        function updateTimer() {
            const currentTime = Date.now();
            const remainingTime = endTime - currentTime;

            if (remainingTime <= 0) {
                clearInterval(countdown);
                timerDisplay.textContent = "00:00:00";
            } else {
                const hours = Math.floor(remainingTime / 3600000);
                const minutes = Math.floor((remainingTime % 3600000) / 60000);
                const seconds = Math.floor((remainingTime % 60000) / 1000);

                const displayHours = hours < 10 ? `0${hours}` : hours;
                const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
                const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

                timerDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
            }
        }

        updateTimer();
        countdown = setInterval(updateTimer, 1000);
    }
});
