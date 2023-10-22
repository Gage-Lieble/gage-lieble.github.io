
let videoChange = (video, file) => {
    let src = document.createElement('source')

    src.setAttribute('src',`media/vids/${file}`)
    src.setAttribute('type', 'video/mp4');
    video.pause()
    video.innerHTML = ''
    video.appendChild(src)
    video.load()
    video.play()
}

const videoSizer = (screen) => {
    let video = document.getElementById('vid-src')
    if(screen.matches) {
        console.log('downsizing')
        videoChange(video, 'pdxSML.mp4')
    } else {
        console.log('upsizing')
        videoChange(video, 'pdxLRG.mp4')
    }
}
let screenSize = window.matchMedia("(max-width: 900px)")
videoSizer(screenSize)
screenSize.addListener(videoSizer)
