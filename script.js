const pulsante = document.getElementById('theme-toggle');
const corpo = document.body;

// Gestione Tema
pulsante.addEventListener('click', () => {
  corpo.classList.toggle('dark-mode');
  
  if (corpo.classList.contains('dark-mode')) {
    pulsante.innerText = "Light Mode";
  } else {
    pulsante.innerText = "Dark Mode";
  }
});

// Gestione Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent! Emma will contact you soon.");
  this.reset();
});
