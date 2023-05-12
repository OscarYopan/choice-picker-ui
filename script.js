const tagsEl = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')

textarea.focus() //Quando carrega a pagina o cursor vai direto

textarea.addEventListener('keyup', element => {
  createTags(element.target.value)
  if (element.key === 'Enter') {
    setTimeout(() => {
      // funcao para limpar
      element.target.value = ''
    }, 10) //tempo de espera em 'ms'

    randomSelect()
  }
})

function createTags(input) {
  const tags = input.split(',') // '.split' para separar os valores do 'arrow'

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highLightTag(randomTag)
    setTimeout(() => {
      unHighLightTag(randomTag)
    }, 100)
  }, 100) // intervalo em 'ms'

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highLightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag) {
  tag.classList.add('pick')
}

function unHighLightTag(tag) {
  tag.classList.remove('pick')
}

// counter
const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replayBtn = document.querySelector('#replay')

runAnimation()

function resetDom() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach(num => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    num.addEventListener('animationend', e => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replayBtn.addEventListener('click', () => {
  resetDom()
  runAnimation()
})
