document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('fadeElement');
  fadeIn(element, 2000); // Duration in milliseconds
});

function fadeIn(element, duration) {
  let opacity = 0;
  const interval = 50; // Interval time in milliseconds
  const increment = interval / duration;

  const fade = setInterval(() => {
      opacity += increment;
      if (opacity >= 1) {
          clearInterval(fade);
          opacity = 1; // Ensure the final opacity is exactly 1
      }
      element.style.opacity = opacity;
  }, interval);
}
