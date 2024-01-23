

// MOJI PARALLAX

let parallax = false
if (parallax){
    
    document.addEventListener("mousemove", (e) => {
        let layers = document.querySelectorAll(".parallax")
    
        layers.forEach(layer => {
           
            
            let speed = layer.getAttribute('data-speed')
    
            const x = (window.innerWidth - e.pageX*speed)/75
            const y = (window.innerHeight - e.pageY*speed)/75
            
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
        
    })
    
}


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
            let vel = .5
            
            if (isScrollingDown()) {
                mojiPos = mojiPos-vel
                moji.style.transform = ` translateY(${mojiPos}px)`
                moji.setAttribute('data-pos', mojiPos-vel)
                
            } else {
            
                mojiPos = vel * (mojiPos+vel)
                moji.style.transform = ` translateY(${mojiPos}px)`
                moji.setAttribute('data-pos', mojiPos+(vel+.5))
            }
            
            
    })

}, 500)