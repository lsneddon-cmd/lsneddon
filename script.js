// Lewis Sneddon
// Portfolio Site
// April 2020

// Nav Bar toggle
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', (e) => 
document.body.classList.toggle('show-nav') + e.target.classList.toggle('rotated')
)


// Modal
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const open = document.getElementById('open');

open.addEventListener('click', () => 
  document.body.classList.remove('show-nav') + modal.classList.add('show-modal')
);
close.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', e =>
 e.target == modal ? modal.classList.remove('show-model') : false
 );

// contact form
const form = document.getElementById('form');
const name = document.getElementById('name');
const company = document.getElementById('company');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Show input error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check valid email
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if (name.value === '') {
    showError(name, "I'll need your name please");
  } else {
    showSuccess(name);
  }

  if (email.value === '') {
    showError(email, "I'll need an email address please");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Something isn't quite right with your email address");
  } else {
    showSuccess(email);
  }

})