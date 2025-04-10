const validarLogin = document.getElementById('botao_logar')




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

    localStorage.setItem('nome_usuario', email)

    if(response.status == 200){
        window.location.href = "../SRC/screens/home.html"
    }else{
        alert('EMAIL OU SENHA INCORRETOS')
    }
}

validarLogin.addEventListener('click',loginUsuario)

