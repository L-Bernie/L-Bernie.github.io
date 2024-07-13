document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamic-text");
    const words = ["passion", "purpose", "creativity"];
    let currentIndex = 0;

    function changeText() {
        currentIndex = (currentIndex + 1) % words.length;
        dynamicText.classList.remove("fade-in-out");
        dynamicText.textContent = words[currentIndex];
        void dynamicText.offsetWidth; // Trigger reflow to restart the animation
        dynamicText.classList.add("fade-in-out");
    }

    setTimeout(() => {
        setInterval(changeText, 2000); // Change text every 5 seconds
    }, 2000); // Wait for 2 seconds for the slide-in animation to complete
});
