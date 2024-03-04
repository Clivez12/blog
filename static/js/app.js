let navTogglEl = document.querySelector('.nav-toggle')
let navMenuList = document.querySelector('.collapse-menu')

navTogglEl.addEventListener('click', ()=>{
    //console.log('menu btn clicked')
    //navMenuList.style.visibility = 'visible'

    navMenuList.classList.toggle('visible')
})