
document.addEventListener("mousemove", (e) => {
    let layers = document.querySelectorAll(".parallax")

    layers.forEach(layer => {
       
        
        let speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/75
        const y = (window.innerHeight - e.pageY*speed)/75
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    
})