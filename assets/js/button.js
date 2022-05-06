let regBtn = document.getElementById('reg') || document.getElementById('enter');
let login = document.getElementById('reg_login');
let password = document.getElementById('reg_password');

if (regBtn) {
  regBtn.onclick = () => {
    if (login.value && password.value) {
      if (regBtn.id === 'reg') {
        regBtn.querySelector('a').href = 'registration_confirmation.html';
      } else if (regBtn.id === 'enter') {
        regBtn.querySelector('a').href = '/index.html';
      } 
    } else {
      regBtn.querySelector('a').href = '#';
    }
  };
}
