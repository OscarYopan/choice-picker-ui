const tagsEl = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')

textarea.focus() //Quando carrega a pagina o cursor vai direto

textarea.addEventListener('keyup', (element) => {
  createTags(element.target.value)
})

function createTags (input) {
  const tags = input.split(',') // split para separar os valores do 'arrow'
  
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    
  });
}