const botaoRegistrar = document.getElementById('registrar_usuario')

async function registrarUsuario() {
    const nome = document.getElementById('username').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value
    const confirm_password = document.getElementById('confirm-password').value

    if(senha == confirm_password){
        const data = {
            nome: nome,
            email: email,
            senha: senha,
            premium: "0",
            imagemPerfil: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            senhaRecuperacao: "reset@1212"
        }

        
        const url = "https://back-spider.vercel.app/user/cadastrarUser"

        const options = {
            method: 'Post',
            headers: {'content-type': 'Application/Json'},
            body: JSON.stringify(data)
        }

        const response = await fetch(url,options)

        localStorage.setItem('nome_usuario',nome)


        if(response.status == 201){
            alert('Registrado com sucesso')
            window.location.href = '../index.html' 
        }else{
            alert("CAMPOS INCORRETOS")
        }
    }
}

botaoRegistrar.addEventListener('click', registrarUsuario)