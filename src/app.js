import { getRandomColor } from './utils'

export default function initApp() {
  const changeColorButton = document.createElement('button')
  changeColorButton.className = 'button'
  changeColorButton.textContent = 'Изменить цвет страницы'
  document.body.append(changeColorButton)

  changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor()
  })
}
// export default initApp

// import { getRandomColor } from './utils'

// function initApp() {
//   const button = document.createElement('button')
//   button.classList.add('button')
//   button.textContent = 'Изменить цвет страницы'
//   document.body.append(button)

//   button.addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandomColor()
//   })
// }

// export default initApp
