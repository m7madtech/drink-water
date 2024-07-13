const bigGlass = document.querySelector('.big-glass');
const smallGlass = document.querySelectorAll('.small-glass');

//bigGlass.style.background = 'linear-gradient(to top, #6ab3f8 12.5%, white 0%)';

function applyGradient() {
    if(bigGlass.style.background === ''){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 12.5%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 12.5%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 25%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 25%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 37.5%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 37.5%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 50%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 50%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 62.5%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 62.5%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 75%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 75%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 87.5%, white 0%)';
    }
    else {bigGlass.style.background = 'rgb(106, 179, 248)';}
}

function eraseGradient() {
    if(bigGlass.style.background === 'rgb(106, 179, 248)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 87.5%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 87.5%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 75%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 75%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 62.5%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 62.5%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 50%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 50%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 37.5%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 37.5%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 25%, white 0%)';
    }
    else if(bigGlass.style.background === 'linear-gradient(to top, rgb(106, 179, 248) 25%, white 0%)'){
        bigGlass.style.background = 'linear-gradient(to top, rgb(106, 179, 248) 12.5%, white 0%)';
    }
    else {bigGlass.style.background = ''}
}


smallGlass.forEach(glass => {
    glass.addEventListener('click', () => {
        if (glass.classList.contains('active')){
            eraseGradient()
            glass.classList.remove('active')
        }
        else {
            applyGradient()
            glass.classList.add('active')
        }
    })
})
