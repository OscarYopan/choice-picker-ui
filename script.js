const tagsEl = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')

textarea.focus() //Quando carrega a pagina o cursor vai direto

textarea.addEventListener('keyup', (element) => {
  createTags(element.target.value)
  if (element.key === 'Enter') {
    setTimeout(() => { // funcao para limpar
      element.target.value = '' 
    }, 10) //tempo de espera em 'ms'

    randomSelect()
  }
})

function createTags (input) {
  const tags = input.split(',') // '.split' para separar os valores do 'arrow'
  
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  });
}

 function randomSelect () {
  const times = 30
  
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
  }, 100) // intervalo em 'ms'
}

function pickRandomTag () {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}