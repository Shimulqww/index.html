// Auto Copy Function
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Referral link copied!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// Fake Bonus Counter Animation
let counter = 0;
const counterEl = document.getElementById("bonusCounter");

function updateCounter() {
  if (counterEl) {
    counter += Math.floor(Math.random() * 10 + 1);
    counterEl.innerText = counter.toLocaleString();
  }
}

// Start the counter interval
setInterval(updateCounter, 2000);
