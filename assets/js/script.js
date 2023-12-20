function toggleFullScreen(element) {
  element.classList.toggle('full-screen');  //function for gallery to switch picture to fulscreen mode by changing class
}

document.addEventListener('DOMContentLoaded', function() {   //email validation
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const consentCheckbox = document.getElementById('consent');

  form.addEventListener('submit', function(event) {
    let isValid = true;

    if (!validateEmail(emailInput.value)) {
      isValid = false;
      alert('Please enter a correct E-mail!');
    }

    if (!consentCheckbox.checked) {
      isValid = false;
      alert('Are you agree with processing of a personal data?');
    }

    if (!isValid) {
      event.preventDefault();
    } 
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});