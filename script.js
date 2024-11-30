// document.addEventListener('DOMContentLoaded', () => {
//     const field = document.querySelector('.field');
//     const ball = document.querySelector('.ball');
  
//     field.addEventListener('click', (e) => {
//       const fieldRect = field.getBoundingClientRect();
//       const x = e.clientX - fieldRect.left - ball.offsetWidth / 2;
//       const y = e.clientY - fieldRect.top - ball.offsetHeight / 2;
//       ball.style.left = `${x}px`;
//       ball.style.top = `${y}px`;
//     });
//   });
  

// document.addEventListener('DOMContentLoaded', () => {
//     const textColorInput = document.getElementById('text-color');
//     const bgColorInput = document.getElementById('bg-color');
//     const textElement = document.getElementById('text');
//     const bodyElement = document.body;
//     textColorInput.addEventListener('input', (e) => {
//       textElement.style.color = e.target.value;
//     });
//     bgColorInput.addEventListener('input', (e) => {
//       bodyElement.style.backgroundColor = e.target.value;
//     });
//   });
  

document.addEventListener('DOMContentLoaded', () => {
  const toggleLightButton = document.getElementById('toggle-light');
  const darkOverlay = document.getElementById('dark-overlay');
  const body = document.body;
  toggleLightButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      toggleLightButton.textContent = 'Chiroqni ochirish';
    } else {
      toggleLightButton.textContent = 'Chiroqni yoqish';
    }
  });
  document.addEventListener('mousemove', (e) => {
    if (body.classList.contains('dark-mode')) {
      const x = e.clientX;
      const y = e.clientY;
      darkOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 100px, rgba(0, 0, 0, 0.9) 200px)`;
    }
  });
});
