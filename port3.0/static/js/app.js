// Scroll text

let prevScroll = 0

const isScrollingDown = () => {
    let scrollDirection = null
    let scrollPos = window.pageYOffset

    if(scrollPos > prevScroll){
        scrollDirection = 'down'
    } else if (scrollPos < prevScroll){
        scrollDirection = 'up'
    }

    prevScroll = scrollPos

    return scrollDirection
}

const handleScroll = () => {
    const textWrap = document.getElementById('scroll-text-wrap')
    if(isScrollingDown() === 'down'){
        // textWrap.style.animationDirection = 'reverse';
        textWrap.classList.remove('RightToLeft')
        textWrap.classList.add('LeftToRight')
        console.log('scrolling down')
    }else{
        textWrap.classList.remove('LeftToRight')
        textWrap.classList.add('RightToLeft')
        console.log('scrolling up')
    }
}   
window.addEventListener('scroll', handleScroll)