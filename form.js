// DELIVERABLES:
// We want to take the user input from the text field
// And on form submit, it should console.log that input

document.addEventListener("DOMContentLoaded", function(event){


  const form = document.querySelector('#form')
  const input = document.querySelector('#user-input')

  form.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault()
    console.log(input.value);

    form.reset()
  })


} )
