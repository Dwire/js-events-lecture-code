// DELIVERABLES:
  // 1) When we click Add Taco button, we want to add a taco to the list
    // - A taco consists of an li element with a p element inside it
  // 2) When we click a taco, we want to remove the taco from the list

//BONUS
  //3)Create our own emojis
  //4)Have button to change non-toco emoji to toco
  //5) Hover turns background a color

  document.addEventListener("DOMContentLoaded", function(){

  const btn = document.querySelector('#add-taco')
  const ul =  document.querySelector('#main-list')
  const form = document.querySelector('#form')
  const input = document.querySelector('#user-input')

  btn.addEventListener('click', generateEmojiLi)
  ul.addEventListener('click', removeEmoji)
  ul.addEventListener('mouseover', colorChanger)
  form.addEventListener('submit', newEmoji)




  function generateEmojiLi(e, emoji = '🌮'){
      const p = document.createElement('p')   //<p></p>
      const li = document.createElement('li') //<li></li>

      p.className = 'taco'                  //<p class='taco'></p>
      p.innerText = emoji                    //<p class='taco'>'🌮'</p>

      li.appendChild(p)
      ul.appendChild(li)
  }

  function removeEmoji(e){
    if (e.target.className === 'taco'){
      e.target.parentElement.remove()
    }
  }

  function newEmoji(e){
    e.preventDefault()

    generateEmojiLi(e, input.value)
    form.reset()
  }

  function colorChanger(e){
    if (e.target.className === 'taco' && e.target.id === 'blue'){
      e.target.id = ""
    }else if (e.target.className === 'taco'){
      e.target.id = 'blue'
    }
  }


})
