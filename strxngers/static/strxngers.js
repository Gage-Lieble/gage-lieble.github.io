

// Intro Overlay


        // logo Animation delay
setTimeout(() => {
    let logo = document.getElementById('strxngers-logo')
    logo.style.opacity = '100%'
    logo.src=`/strxngers/static/imgs/animate.gif`
}, 750)




let shopBtn = document.getElementById('entersite-btn')

shopBtn.addEventListener('click', () => {
    let introCont = document.getElementById('intro-overlay')
    let prodDesc = document.getElementById('desc-wrap')
    let prodImg = document.getElementById('img-placehold')
    introCont.classList.add('fadeOut')
    prodDesc.classList.add('fadeInIntro')
    prodImg.classList.add('fadeInIntro')
    setTimeout(() => {
        introCont.classList.add('remove')
    }, 175)
})


// Content

let buyBtn = document.getElementById('buy-btn')

buyBtn.addEventListener('click', () => {
    console.log('BUYYY')
})





// Cursor

let innercusror = document.querySelector('.innercursor')
let outercusror = document.querySelector('.outercursor')

        // Follow Cursor
document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    innercusror.style.top = y+'px'
    innercusror.style.left = x+'px'
    innercusror.style.display = 'block'
    outercusror.style.top = y+'px'
    outercusror.style.left = x+'px'
    outercusror.style.display = 'block'
})
        // Remove if cursor leaves page
document.addEventListener('mouseout', () => {
    innercusror.style.display = 'none'
    outercusror.style.display = 'none'
})

let btns = Array.from(document.querySelectorAll('button'))

btns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        innercusror.classList.add('grow')
        outercusror.classList.add('shrink')
    })
    btn.addEventListener('click', () =>{
        innercusror.classList.add('clickAnm')
        outercusror.classList.add('clickAnm')
        
        setTimeout(() =>{
            innercusror.classList.remove('clickAnm')
            outercusror.classList.remove('clickAnm')
        },500)
    })
   
    btn.addEventListener('mouseleave', () => {
        innercusror.classList.remove('grow')
        outercusror.classList.remove('shrink')
    })
})

let radios = Array.from(document.querySelectorAll('label'))

radios.forEach((radio) => {
    radio.addEventListener('mouseover', () => {
        innercusror.classList.add('grow')
        outercusror.classList.add('shrink')
    })
    radio.addEventListener('click', () =>{
        innercusror.classList.add('clickAnm')
        outercusror.classList.add('clickAnm')
        
        setTimeout(() =>{
            innercusror.classList.remove('clickAnm')
            outercusror.classList.remove('clickAnm')
        },500)
    radio.addEventListener('mouseleave', () => {
        innercusror.classList.remove('grow')
        outercusror.classList.remove('shrink')
    })
    })
})



// Details Page

let detailsBtn = document.getElementById('details-btn')
let btnCount = 0
detailsBtn.addEventListener('click', () =>{
    btnCount ++
    let descPage = document.getElementById('details-wrap')
    let prodTitle = document.getElementById('product-title')
    let splash = document.getElementById('img-splash')
    if (detailsBtn.innerHTML == 'Details'){
        detailsBtn.innerHTML = '<img src="/strxngers/static/imgs/favicon.svg" style="width:20px; position: absolute; filter: invert(100%); ">'
    }else{
        detailsBtn.innerHTML = 'Details'
    }
 
    if (btnCount % 2 == 0 ){

        descPage.classList.remove('details-open')
        prodTitle.classList.remove('move-title')
        splash.classList.remove('remove-img')
    
        descPage.classList.add('details-close')
        prodTitle.classList.add('move-title-down')
        splash.classList.add('add-img')
    }else{

        descPage.classList.remove('details-close')
        prodTitle.classList.remove('move-title-down')
        splash.classList.remove('add-img')
        
        descPage.classList.add('details-open')
        prodTitle.classList.add('move-title')
        splash.classList.add('remove-img')

    }
})



// Check out Page

let addCartBtn = document.getElementById('buy-btn')
let exitBuyBtn = document.getElementById('exit-buybtn')
addCartBtn.addEventListener('click', () =>{
    let checkoutPage = document.getElementById('buypage-wrap')
    checkoutPage.classList.remove('fadeOutBuy')
    checkoutPage.classList.add('fadeInBuy')
    checkoutPage.style.display = 'flex'
})

exitBuyBtn.addEventListener('click', () =>{
    let checkoutPage = document.getElementById('buypage-wrap')
    checkoutPage.classList.remove('fadeInBuy')
    checkoutPage.classList.add('fadeOutBuy')
    innercusror.classList.add('clickAnm')
    outercusror.classList.add('clickAnm')
    
    setTimeout(() => {
        innercusror.classList.remove('clickAnm')
        outercusror.classList.remove('clickAnm')
        checkoutPage.style.display = 'none'
    }, 500)
    
})

exitBuyBtn.addEventListener('mouseover', () => {
    innercusror.classList.add('grow')
    outercusror.classList.add('shrink')
})


exitBuyBtn.addEventListener('mouseleave', () => {
    innercusror.classList.remove('grow')
    outercusror.classList.remove('shrink')
})