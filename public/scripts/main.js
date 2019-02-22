function processForm(e) {
  e.preventDefault();
  let telInputValue = document.querySelector('.borkapp-contentwrapper__tel').value;
  let passwordInputValue = document.querySelector('.borkapp-contentwrapper__password').value;
  console.log(telInputValue, passwordInputValue);
  document.querySelector('.borkapp-contentwrapper__tel').value = '';
  document.querySelector('.borkapp-contentwrapper__password').value = '';
  return false;
}

let form = document.querySelector('.borkapp__signin');
let telInput = document.querySelector('.borkapp-contentwrapper__tel');
let passwordInput = document.querySelector('.borkapp-contentwrapper__password');
let buttonSent = document.querySelector('.borkapp-contentwrapper__submit');
form.addEventListener('submit', processForm);
telInput.addEventListener('input', formatingTelInput);
passwordInput.addEventListener('input', formatingPasswordInput);
let statusButtonSent = [false, false];

function statusButtonSentCheck() {
  if (statusButtonSent[0] === true && statusButtonSent[1] === true) {
    buttonSent.className = 'borkapp-contentwrapper__submitactive';
  } else {
    buttonSent.className = 'borkapp-contentwrapper__submit';
  }
}

function formatingTelInput(e) {
  if (e.target.value === '') return null;
  let signs = e.target.value;
  let signsArr = signs.split('');
  let numbersArr = [];
  for (let i = 0; i < signsArr.length; i++) {
    if (!isNaN(signsArr[i])) {
      numbersArr.push(signsArr[i]);
    }
  }

  if (numbersArr.length === 11) {
    statusButtonSent[0] = true;
  } else {
    statusButtonSent[0] = false;
  }

  statusButtonSentCheck();


  document.querySelector('.borkapp-contentwrapper__tel').value = numbersArr.join('');
  return true;
}

function formatingPasswordInput(e) {
  if (e.target.value === '') return null;
  let signs = e.target.value;

  if (signs.length >= 5) {
    statusButtonSent[1] = true;
  } else {
    statusButtonSent[1] = false;
  }

  statusButtonSentCheck();

  return true;
}