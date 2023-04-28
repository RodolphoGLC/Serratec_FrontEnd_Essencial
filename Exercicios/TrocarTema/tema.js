const buttonTT = document.getElementsByClassName('trocaTema')

const theme = {
    't-dark': 't-light',
    't-light': 't-dark',
}

if (buttonTT){
    buttonTT,addEventListener('click', event => {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', theme[currentTheme] || 't-light')
    })
}