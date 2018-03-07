const colorChangeButton = document.querySelector('.color-change-btn');

const classToggle = () => {
  document.querySelector('h1').classList.toggle('red')
}

colorChangeButton.addEventListener('click', classToggle)
