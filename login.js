const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (username.value.trim() === '' || password.value.trim() === '') {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        alert('Login successful! (You can link this to backend)');
        // You can replace the alert with actual login logic
      }
    });

    showPassword.addEventListener('change', function () {
      password.type = this.checked ? 'text' : 'password';
    });