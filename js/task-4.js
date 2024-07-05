// Завдання 4


const form = document.querySelector('.login-form');

form.addEventListener('submit', function(evt) {

    evt.preventDefault();

    const emailInput = form.elements['email'];
    const passwordInput = form.elements['password'];

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert ('All form fields must be filled in');
        return; 
    }

    const formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);
    form.reset();
});
