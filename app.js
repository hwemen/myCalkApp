document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const darkModeSwitch = document.getElementById('darkModeSwitch');

    // Toggle between Sign In and Sign Up forms
    signInBtn.addEventListener('click', () => {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        signInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
    });

    signUpBtn.addEventListener('click', () => {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
        signUpBtn.classList.add('active');
        signInBtn.classList.remove('active');
    });

    // Set initial state (Sign In form shown by default)
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');

    // Dark Mode Toggle
    darkModeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
    });
});
