// Scroll text

// let prevScroll = 0

// const isScrollingDown = () => {
//     let scrollDirection = null
//     let scrollPos = window.pageYOffset

//     if(scrollPos > prevScroll){
//         scrollDirection = 'down'
//     } else if (scrollPos < prevScroll){
//         scrollDirection = 'up'
//     }

//     prevScroll = scrollPos

//     return scrollDirection
// }

// const handleScroll = () => {
//     const textWrap = document.getElementById('scroll-text-wrap')
//     if(isScrollingDown() === 'down'){
//         // textWrap.style.animationDirection = 'reverse';
//         textWrap.classList.remove('RightToLeft')
//         textWrap.classList.add('LeftToRight')
//         console.log('scrolling down')
//     }else{
//         textWrap.classList.remove('LeftToRight')
//         textWrap.classList.add('RightToLeft')
//         console.log('scrolling up')
//     }
// }   


// Nav pill

const pillMover = (location) => {
    const pill = document.getElementById('nav-pill')
    const addClass = (loc) =>{ 
        pill.classList.add('nav-pill')
        pill.classList.add(loc)
        return pill
    }
    if (location === 'top'){
        pill.className = ""
        addClass('nav-top')
    } else if (location === 'projects'){
        pill.className = ""
        addClass('nav-projects')
    } else if (location === 'contact'){
        pill.className = ""
        addClass('nav-contact')
    } else if (location === 'about'){
        pill.className = ""
        addClass('nav-about')
    }
}













// window.addEventListener('scroll', () => {
//     console.log('SCROLL')
//     let count = 0
//     if(count % 12 === 0){
//         document.getElementById('text-roller').classList.add('speed-text')
//     }

//     setTimeout(() => {
//         document.getElementById('text-roller').classList.remove('speed-text')
//     },3000)
//     count ++
// })


// var element = document.getElementById("text-roller");
// var text_roller = new TextRoller(element);

// text_roller.start();




// window.TEGMUp = new TEGMarquee({
//     marqueeSelector : '#example',
//     direction : TEGMarquee.D_LEFT,
//     mousePause : false,
//   });

//   TEGMUp.doScroll();


const circle = new CircleType(document.getElementById('circle-text'));

// circle.radius(1000).dir(-1);
circle.radius(100).dir(-1)

console.log(circle)
// circle.container.classList.add('rotate')