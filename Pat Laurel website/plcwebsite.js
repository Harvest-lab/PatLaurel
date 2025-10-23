// to make the manu appear and disappear
const toggleBtn = document.querySelector('.toggle-bars')
const menu = document.querySelector('ul')

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle('active')
    menu.classList.toggle('active')
})