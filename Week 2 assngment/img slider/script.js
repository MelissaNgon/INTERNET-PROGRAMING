document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;
    let timer;

    function updateSlider() {
        const translateX = -currentIndex * 400; // 400px per image
        slider.style.transform = `translateX(${translateX}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 6;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 6) % 6;
        updateSlider();
    }

    prevButton.addEventListener("click", function() {
        clearTimeout(timer); // Stop the timer when manually navigating
        prevSlide();
        startTimer(); // Start the timer again
    });

    nextButton.addEventListener("click", function() {
        clearTimeout(timer); // Stop the timer when manually navigating
        nextSlide();
        startTimer(); // Start the timer again
    });

    // Function to start the timer for automatic slide change
    function startTimer() {
        timer = setTimeout(function() {
            nextSlide();
            startTimer(); // Continue the timer loop
        }, 4000);
    }

    // Start the automatic slide change timer initially
    startTimer();
});
