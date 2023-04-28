function changeTitle(){
    var titulo = document.getElementsByTagName("h1")[0]
    titulo.innerHTML = "Mudei!";
}

function validateUser(e){
    e.preventDefault();

    var name = getElementsById("nameImput").value;
    var password = getElementsById("passwordImput").value;
    
    if(name == "123" && password == "321"){
        document.getElementById("status").innerHTML = "Olá vc está logado";
    }
    else {
        document.getElementById("status").innerHTML = "Senha incorreta, tente de novo";
    }
}