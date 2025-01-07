
// this selects the form element from the HTML
const form = document.querySelector('#form')
console.log ('form is: ', form)
const submitButton = document.querySelector('#submit')
console.log('submit is: ', submit)

form.addEventListener('submit', (e) => {
    submitButton.disabled = true;
    e.preventDefault();
    window.location.href = window.location.origin + '/block09/success.html';
  });

// ABSOLUTE
// USERS/JAYCE/DOCUMENTS/COURSEWORK/BLOCK09/SUCCESS.HTML
// RELATIVE
// BLOCK09/SUCCESS.HTML