const toggle = document.querySelector('.toggle')
const banner = document.querySelector('.banner')
const btn = document.querySelectorAll('.btn')
    toggle.onclick = function () {
        toggle.classList.toggle('active')
        banner.classList.toggle('active')
        for (let index = 0; index < btn.length; index++) {
            btn[index].classList.toggle('active')
        }
    }

function parallax(e){
    this.querySelectorAll('.elements').forEach(elem=>{
        const speed = elem.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        elem.style.transform = `translateX(${x}px)`
    })
}
document.addEventListener('mousemove', parallax)