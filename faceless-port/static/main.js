// CONTROLS
let parallaxCursor = false
let parallaxScroll = true





// const cursorBtn = document.getElementById("parralax-mouse")
// const scrollBtn = document.getElementById("parralax-scroll")

// cursorBtn.addEventListener('click', () => {
//     if (parallaxCursor){
//         console.log('fa')
//         parallaxCursor = false
//         document.getElementById("moji-char").style = ' '
//         mojiParallaxCursor(parallaxCursor)
            
//     } else {
//         console.log('tr')
//         parallaxCursor = true
//         mojiParallaxCursor(parallaxCursor)
//     }
// })

// scrollBtn.addEventListener('click', () => {
//     if (parallaxScroll){
//         parallaxScroll = false
//         mojiParallaxScroll(parallaxScroll)
//     } else {
//         parallaxScroll = true
//         mojiParallaxScroll(parallaxScroll)
//     }
// })


// MOJI PARALLAX CURSOR
const mojiParallaxCursor = (run) => {
    
    if(run) {
        console.log('run')
        let layers = document.querySelectorAll(".parallax")
        document.addEventListener("mouseleave", () => {
    
            layers.forEach(layer => {
                layer.style.transition  = `.1s ease`
                
                layer.style.transform  = ``
            })
        })
        
        document.addEventListener("mousemove", (e) => {
        
            layers.forEach(layer => {
               
                
                let speed = layer.getAttribute('data-speed')
        
                const x = (window.innerWidth - e.pageX*speed)/75
                const y = (window.innerHeight - e.pageY*speed)/75
                
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
            
        })

    } else if (run == false) {
        console.log('end')
    
    } 

    
}

// MOJI PARRALAX SCROLL

const mojiParallaxScroll = () => {

    setTimeout(() => {
        let prevPos = 0
        
        const isScrollingDown = () => {
            let goingDown = false
        
            let scrollPos = window.scrollY
        
            if(scrollPos > prevPos){
                goingDown = true
            }
        
            prevPos = scrollPos
        
            return goingDown
        
        }
        
        document.addEventListener('scroll', () => {
                let moji = document.getElementById("moji-char")
                let mojiPos = Number(moji.getAttribute('data-pos'))
                let vel = 1
                
                if (isScrollingDown()) {
                    mojiPos = mojiPos-vel
                    moji.style.transform = ` translateY(${mojiPos}px)`
                    moji.setAttribute('data-pos', mojiPos)
                    
                } else {
                    if (mojiPos < 23) {
                        
                        mojiPos = mojiPos+vel
                        moji.style.transform = ` translateY(${mojiPos}px)`
                        moji.setAttribute('data-pos', mojiPos+vel)
                    }
                }
                
                
        })
    
    }, 500)
}