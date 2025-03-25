const validarLogin = document.getElementById('botao_logar')


function carregarTelaLogin(){
    const container = document.createElement('div')
    container.classList.add('container')
    const imgLogo = document.createElement('img')
    imgLogo.classList.add('logo')

    const grupaoHidden = document.createElement('div')
    grupaoHidden.classList.add('grupao hidden')
    const h1Titulo = document.createElement('h1')
    
    const form_group = document.createElement('div')
    form_group.classList.add('form-group')


    //Adicionando
    container.appendChild(imgLogo)
}

async function loginUsuario() {
    const email = document.getElementById('username').value
    const senha = document.getElementById('password').value

    const data = {
        email: email,
        senha: senha
    }

    const url = "https://back-spider.vercel.app/login"

    const options ={
        method: 'Post',
        headers: {'content-type':'Application/Json'},
        body: JSON.stringify(data)
    }

    const response = await fetch(url,options)


    if(response.status == 200){
        window.location.href = "registro.html"
    }else{
        alert('EMAIL OU SENHA INCORRETOS')
    }
}

validarLogin.addEventListener('click',loginUsuario)
carregarTelaLogin()
