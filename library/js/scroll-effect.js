document.addEventListener("DOMContentLoaded", function() {
  const parallaxBg = document.querySelector(".parallax-bg");
  const scrollDownIcon = document.querySelector(".scroll-down");

  let lastScrollTop = 0;
  window.addEventListener("scroll", function() {
      let scrollPercent = window.scrollY / (document.body.clientHeight - window.innerHeight);
      let blurValue = scrollPercent * 2; // Adjust the multiplier for blur effect
      let opacityValue = 1 - scrollPercent / 4; // Adjust the divisor for slower fading

      // Check if scrolling up
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st < lastScrollTop) {
          // Scrolling up
          blurValue = 0; // Reset blur value
          opacityValue = 1; // Reset opacity value
      }

      parallaxBg.style.filter = `blur(${blurValue}px)`;
      parallaxBg.style.opacity = Math.max(opacityValue, 0).toFixed(1); // Ensure opacity doesn't go below 0

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

      // Show/hide scroll-down icon based on scroll position
      if (scrollPercent > 0.5) {
          scrollDownIcon.style.display = "none";
      } else {
          scrollDownIcon.style.display = "block";
      }
  });
});
