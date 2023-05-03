let usuarios = [
    {
        "login": "12345678@gmail.com",
        "senha": "MTIzNDU2Nzg="
    },
    {
        "login": "G4121212@gmail.com",
        "senha": "RzQxMjEyMTI="
    }
]

// Função do olho (visualizar a senha)

function olharSenha() {
    var typePassword = document.getElementById("senha")
    var verificar = typePassword.getAttribute("type");

    if (verificar == "password") {
        typePassword.setAttribute('type', 'text');
    } else if (verificar == 'text') {
        typePassword.setAttribute('type', 'password');
    }
}

//Função Esquecer Senha - não sei se será implementado

//Função para Login

function logar() {
    var getUsuario = document.getElementById("user").value;
    var getSenha = document.getElementById("senha").value;

    var index = usuarios.findIndex(function (usuarios, i) {
        return usuarios.login === getUsuario;
    })

    //Verificar se o login e senha batem
    if (index === -1) {
        alert("Usuário inexistente")
    }
    else if (usuarios[index].login === getUsuario && usuarios[index].senha === window.btoa(getSenha)) {
        alert("Logado")
        window.location("../html/inicial.html");
    }
    else {
        alert("Senha incorreta")
    }
}






