// Select elements
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.getElementById('digital-clock');

// Update Clock Function
function updateClock() {
    const now = new Date();

    // Get current time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate degrees for analog clock
    const hoursDeg = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30
    const minutesDeg = minutes * 6; // 360 / 60 = 6
    const secondsDeg = seconds * 6;

    // Rotate clock hands
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;

    // Update digital clock
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    digitalClock.textContent = formattedTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();