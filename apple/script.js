// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})
// End of Common JS

//Cube
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})


let x = 0
let y = 20
let z = 0
let bool = true
let interval;

const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg) `
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg) `
})

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}

playPause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})
//end Cube



// SlideShow
const slideshowDivs = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 && div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
};

slideshowDivs();

const slideshow = () => {
    let a = 0;

    setInterval(() => {
        a++;

        const div = document.querySelector('.slideshow .change'); 

        
        if (div) {
            div.classList.remove('change');

            const divs = document.querySelectorAll('.slideshow div'); 
            if (a < divs.length) {
                div.nextElementSibling.classList.add('change');
            } else {
                divs[0].classList.add('change');
                a = 1;
            }
        }
    }, 2000);
};

slideshow();
// End SlideShow
// Section 3
const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})
// End Section 3

// Section 4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0
let axisX = 0

const hideControl = () => {
    if(axisY === -240) {
        watchTopControl.classList.add('hideControl')
    } else {
        watchTopControl.classList.remove('hideControl')
    }

    if(axisY === 240) {
        watchBottomControl.classList.add('hideControl')
    } else {
        watchBottomControl.classList.remove('hideControl')
    }

    if(axisX === 240) {
        watchRightControl.classList.add('hideControl')
    } else {
        watchRightControl.classList.remove('hideControl')
    }

    if(axisX === -240) {
        watchLeftControl.classList.add('hideControl')
    } else {
        watchLeftControl.classList.remove('hideControl')
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 60}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 60}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 60}rem`
    hideControl()
})

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 60}rem`
    hideControl()
})
// End of Section 4