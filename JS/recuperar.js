const botao_logar = document.getElementById('botao_logar')

async function recuperarSenha() {

    const email = document.getElementById('username').value
    const wordkey = document.getElementById('word').value

    const data = {
        email: email,
        wordKey: wordkey
    }

    const url = "https://back-spider.vercel.app/user/RememberPassword"

    const options ={
        method: 'Post',
        headers: {'content-type':'Application/Json'},
        body: JSON.stringify(data)
    }

    const response = await fetch(url, options)

    const newData = await response.json()

    localStorage.setItem('idUserPass', newData.id)
    
    if(response.status == 200){
        alert('Palavra Chave Aprovada !')
        window.location.href = "../screens/redefinir_senha.html"
    }
}

botao_logar.addEventListener('click', recuperarSenha)