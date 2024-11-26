document.addEventListener("DOMContentLoaded", () => {
    const fingerprintLoader = document.getElementById("fingerprint-loader");
  
    // Trigger the animation after 1 second
    setTimeout(() => {
      fingerprintLoader.classList.add("fade-out");
      
      // Remove the loader element completely after the animation finishes
      setTimeout(() => {
        fingerprintLoader.style.display = "none";
      }, 600); // Match the duration of the animation in CSS
    }, 600); // Wait 1 second before triggering the animation
  });
  