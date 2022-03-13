const waves = document.querySelector("div.waves")
const mainBackground = document.querySelector("main .background")

const scrollAnimElems = [...document.querySelectorAll(".scroll-anim-elem")]

const elementInView = (el, distance=0) => {
    const elementTop = el.getBoundingClientRect().top
  
    return (
      elementTop - distance <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }
  
const displayScrollElement = (el) => {
    el.classList.add("in-view")
  }
  
const hideScrollElement = (el) => {
    el.classList.remove("in-view")
  }
  
const handleScrollAnimation = (elems) => {
    elems.forEach(elem => {
      if (elementInView(elem)) {
        displayScrollElement(elem)
      } else {
        hideScrollElement(elem)
      }
    })
}

window.addEventListener("scroll", ()=> {
    handleScrollAnimation(scrollAnimElems)
})

window.addEventListener("scroll", () => {
    const clientScroll = window.pageYOffset + window.innerHeight || document.documentElement.scrollTop + window.innerHeight
    const siteHeight = document.body.clientHeight
    const brightness = 1.1 - (clientScroll/siteHeight) + 0.1

    waves.style.filter = `brightness(${brightness})`
    mainBackground.style.filter = `brightness(${brightness})`
})