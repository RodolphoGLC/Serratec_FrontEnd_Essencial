const buttonTT = document.getElementsByClassName('temaFundo');

const theme = {
    't-dark': 't-light',
    't-light': 't-dark',
}

function trocarTema(){
    const currentTheme = document.body.dataset.theme
    document.body.setAttribute('data-theme', theme[currentTheme] || 't-light')
}

