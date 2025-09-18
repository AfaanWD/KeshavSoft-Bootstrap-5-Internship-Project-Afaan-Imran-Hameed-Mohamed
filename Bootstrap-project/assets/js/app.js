document.addEventListener('DOMContentLoaded', () => {
// Current year in footer
const y = new Date().getFullYear();
const el = document.getElementById('year');
if (el) el.textContent = y;


// Form validation and dummy submission
const form = document.getElementById('contactForm');
if (form) {
form.addEventListener('submit', e => {
e.preventDefault();
if (!form.checkValidity()) {
form.classList.add('was-validated');
return;
}
const alertEl = document.getElementById('formAlert');
alertEl.innerHTML = '<div class="alert alert-success">Message sent successfully (demo mode).</div>';
form.reset();
form.classList.remove('was-validated');
});
}
});