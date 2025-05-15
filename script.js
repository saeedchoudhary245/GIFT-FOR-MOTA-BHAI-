
function openGift() {
  document.querySelector('.gift-box').style.display = 'none';
  document.getElementById('message').classList.remove('hidden');
  document.getElementById('bgMusic').play();
  launchConfetti();
}

function goFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}

function initGift() {
  // Preload
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    confetti.style.opacity = 0.7;
    confetti.style.zIndex = 9999;
    confetti.style.transition = "all 3s ease-in-out";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.style.top = window.innerHeight + "px", 50);
  }
}
