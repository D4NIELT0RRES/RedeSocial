const botao_logar = document.getElementById('botao_logar')

async function redefinirSenha() {
   
    const senha = document.getElementById('password').value

    const data = {
        
        senha: senha
    }

    const idUser = localStorage.getItem("idUserPass")

    const url = `https://back-spider.vercel.app/user/newPassword/${idUser}`

    const options ={
        method: 'Put',
        headers: {'content-type':'Application/Json'},
        body: JSON.stringify(data)
    }

    const response = await fetch(url, options)
    
    if(response.status == 200){
        alert('SENHA REDEFINIDA')
        window.location.href = "../../index.html"
    }

}

botao_logar.addEventListener('click', redefinirSenha)
