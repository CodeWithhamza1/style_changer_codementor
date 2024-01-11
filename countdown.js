document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown-timer');
    const contentElement = document.getElementById('dynamic-content');

    function updateTimer() {
        let secondsUntilUpdate = 10;

        function tick() {
            secondsUntilUpdate--;
            countdownElement.innerHTML = `Next update in ${secondsUntilUpdate} second${secondsUntilUpdate !== 1 ? 's' : ''}`;

            if (secondsUntilUpdate <= 0) {
                updateStyles();
                secondsUntilUpdate = 10; // Reset the timer for the next 10 seconds
            }
        }

        setInterval(tick, 1000);
    }

    function updateStyles() {
        const dynamicStyles = generateRandomStyles();

        // Apply the dynamic styles directly to the inline style attribute
        contentElement.style.cssText = dynamicStyles;

        // Save styles to local storage for persistence
        saveStylesToLocalStorage(dynamicStyles);
    }

    function generateRandomStyles() {
        const randomBackgroundColor = getRandomColor();
        const randomTextColor = getRandomColor();
    
        return `
            background-color: ${randomBackgroundColor} !important;
            color: ${randomTextColor};
            border: 2px solid ${randomTextColor};
            /* Add more random styles as needed */
        `;
    }

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    function saveStylesToLocalStorage(styles) {
        localStorage.setItem('dynamicStyles', styles);
    }

    function loadStylesFromLocalStorage() {
        const storedStyles = localStorage.getItem('dynamicStyles');
        if (storedStyles) {
            // Apply the stored styles directly to the inline style attribute
            contentElement.style.cssText = storedStyles;
        }
    }

    updateTimer();
    loadStylesFromLocalStorage();
});
