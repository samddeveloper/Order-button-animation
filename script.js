function animateButton() {
    const orderButton = document.getElementById('orderButton');
    const checkMark = document.querySelector('.check-mark');
    const orderPlaced = document.querySelector('.order-placed');
    const fireworksContainer = document.querySelector('.fireworks');
  
    // Hide button
    orderButton.style.opacity = '0';
    orderButton.style.pointerEvents = 'none'; // Disable button clicks
  
    // Show checkmark
    checkMark.style.transform = 'translate(-50%, -50%) scale(1)';
    checkMark.style.opacity = '1';
  
    // Show "Order Placed" message
    orderPlaced.style.opacity = '1';
  
    // Show fireworks
    fireworksContainer.innerHTML = '';
    const numFireworks = 20; // Number of fireworks
    for (let i = 0; i < numFireworks; i++) {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = Math.random() * 100 + 'vw';
      firework.style.top = Math.random() * 100 + 'vh';
      fireworksContainer.appendChild(firework);
    }
  }
  