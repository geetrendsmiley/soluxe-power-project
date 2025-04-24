const form = document.getElementById('signupForm');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const showPassword = document.getElementById('showPassword');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (
        fullname.value.trim() === '' ||
        email.value.trim() === '' ||
        username.value.trim() === '' ||
        password.value.trim() === '' ||
        confirmPassword.value.trim() === '' ||
        password.value !== confirmPassword.value
      ) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        alert('Account created successfully! (You can connect this to backend)');
        // Add backend API call here if needed
      }
    });

    showPassword.addEventListener('change', function () {
      const type = this.checked ? 'text' : 'password';
      password.type = type;
      confirmPassword.type = type;
    });