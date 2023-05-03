let usuarios = [
    {
      "login": "marina",
      "senha": "123"
    },
    {
      "login": "rod",
      "senha": "123"
    }
  ]

// Função do olho (visualizar a senha)

function olharSenha() {
    var typePassword = document.getElementById("visSenha")
    var verificar = typePassword.getAttribute("type");

    if (verificar == "password") {
        typePassword.setAttribute('type', 'text');
    } else if (verificar == 'text') {
        typePassword.setAttribute('type', 'password');
    }
}

//Função Esquecer Senha - não sei se será implementado

//Função para Login

function logarText() {
    leitura();
    var getUsuario = document.getElementById("user");
    var getSenha = document.getElementById("visSenha");

    let indexUsuario = 0;
    for (let i = 0; i < arrayUsuarios.lenght; i++) {
        if (arrayUsuarios[i] == getUsuario.value) {
            indexUsuario = i;
        }
    }

    if (getUsuario.value == arrayUsuarios[indexUsuario] && getSenha.value == arrayUsuarios[indexUsuario + 1]) {
        alert("Logado");
        //Fazer trocar de cor da div
    }
    else {
        alert("Tente novamente");
    }
}

// Login lendo em um arquivo txt

function leitura() {
    var arrayUsuarios = [];
    let reader = new FileReader();
    var linha = "";
    let path = 'login.txt';

    linha = reader.read(path);
    if (linha != null) {
        arrayUsuarios = linha.split("," || "\r\n");
    }
}






