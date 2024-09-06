const form = document.querySelector('.form');
const email = form.querySelector('[name=email]');
const password = form.querySelector('[name=password]');

const accessAllowed = document.querySelector('.allowed')
const accessClosed = document.querySelector('.closed')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('./db.json')
    .then((res) => res.json())
    .then((data) => {
      for (let user of data) {
        if (user.email === email.value && user.password === +password.value) {

          accessAllowed.classList.add('active')
          setTimeout(() => accessAllowed.classList.remove('active'), 2000);

          email.value = ''
          password.value = ''
          return
        } else {
          accessClosed.classList.add('active');
          setTimeout(() => accessClosed.classList.remove('active'), 2000);
        }
      }
    })
  })
 
