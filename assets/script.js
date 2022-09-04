const changeThemeBtn = document.querySelector('.change')

const green = document.getElementById('green').childNodes[1]
const darkGreen = document.getElementById('dark-green').childNodes[1]
const pink = document.getElementById('pink').childNodes[1]
const darkPink = document.getElementById('dark-pink').childNodes[1]


// Reset Colors
const resetColors = () => {
    if(document.body.classList.contains('green')){
        document.body.classList.remove('green')
    }else if (document.body.classList.contains('dark-green')) {
        document.body.classList.remove('dark-green')
    }else if (document.body.classList.contains('pink')) {
        document.body.classList.remove('pink')
    }else if (document.body.classList.contains('dark-pink')) {
        document.body.classList.remove('dark-pink')
    }

    colors.forEach(a => {
        if(a.classList.contains('selected')){
            a.classList.remove('selected')
        }
    })
}

// Toggle dark mode
const toogleDarkMode = () => {
    document.body.classList.toggle('dark')
}

changeThemeBtn.addEventListener('change', () => {
    resetColors()
    toogleDarkMode()

    // Save or remove dark mode
    localStorage.removeItem('dark')

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark', 1)
    }
})


// Colors Theme
const colors = document.querySelectorAll('.color')

const addGreenMode = () => {
    document.body.className = ''
    document.body.classList.add('green')

    colors.forEach(a => {
        if(a.classList.contains('selected')){
            a.classList.remove('selected')
        }
    })
    green.classList.add('selected')
}

const addDarkGreenMode = () => {
    document.body.className = ''
    document.body.classList.add('dark-green')

    colors.forEach(a => {
        if(a.classList.contains('selected')){
            a.classList.remove('selected')
        }
    })
    darkGreen.classList.add('selected')
}

const addPinkMode = () => {
    document.body.className = ''
    document.body.classList.add('pink')

    colors.forEach(a => {
        if(a.classList.contains('selected')){
            a.classList.remove('selected')
        }
    })
    pink.classList.add('selected')
}

const addDarkPinkMode = () => {
    document.body.className = ''
    document.body.classList.add('dark-pink')

    colors.forEach(a => {
        if(a.classList.contains('selected')){
            a.classList.remove('selected')
        }
    })
    darkPink.classList.add('selected')
}

green.addEventListener('click', () => {
    addGreenMode()

})

darkGreen.addEventListener('click', () => {
    addDarkGreenMode()

})

pink.addEventListener('click', () => {
    addPinkMode()

})

darkPink.addEventListener('click', () => {
    addDarkPinkMode()

})


// Load light or dark mode AND colors mode
const loadTheme = () => {
    const darkMode = localStorage.getItem('dark'),
    green = localStorage.getItem('green'),
    darkGreen = localStorage.getItem('dark-green'),
    pink = localStorage.getItem('pink'),
    darkPink = localStorage.getItem('dark-pink')

    if(darkMode){
        toogleDarkMode()
    }
}

loadTheme()