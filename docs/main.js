document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // handle the toggling of active class for side bar navigation
    let navs = document.querySelectorAll('.nav')
    navs.forEach(nav => {
      nav.addEventListener('click', () => {
        document.querySelector('.nav.is-active').classList.toggle('is-active')
        nav.classList.toggle('is-active')
      })
    })
  }
}
