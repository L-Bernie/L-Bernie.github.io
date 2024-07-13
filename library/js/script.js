let currentTextIndex = 1; // Start from the first ID

function type() {
    const currentTextElement = document.getElementById(`typing-text-${currentTextIndex}`);
    const currentText = currentTextElement.textContent;

    let currentIndex = 0;
    currentTextElement.textContent = ''; // Clear the text

    function revealText() {
        currentTextElement.textContent += currentText[currentIndex];
        currentIndex++;
        if (currentIndex < currentText.length) {
            setTimeout(revealText, 100); // Typing speed (adjust as needed)
        } else {
            setTimeout(() => {
                currentTextElement.style.display = 'none'; // Hide the current ID
                currentTextIndex++;
                const nextTextElement = document.getElementById(`typing-text-${currentTextIndex}`);
                if (nextTextElement) {
                    nextTextElement.style.display = 'block'; // Show the next ID
                    type(); // Start typing for the next ID
                } else {
                    localStorage.setItem('splashShown', 'true'); // Set flag in local storage
                    setTimeout(() => {
                        window.location.href = 'main.html'; // Redirect to main content page
                    }, 1500); // Redirect after 3 seconds (adjust as needed)
                }
            }, 1000); // Delay before hiding the current ID and showing the next text
        }
    }

    revealText(); // Start the typing animation
}

setTimeout(type, 1000); // Initial delay before starting the first text
