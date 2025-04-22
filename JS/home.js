const postContainer = document.getElementById('containerPostagem')
const enviarPostagem = document.getElementById('enviando')

const dataAtual = new Date()

const dia = dataAtual.getDate()
const mes = dataAtual.getMonth() + 1
const ano = dataAtual.getFullYear()

const dataFormatada = `${dia.toString().padStart(2,'0')}/${mes.toString().padStart(2,'0')}/${ano}`
const usernameGuardado = localStorage.getItem('nome_usuario')


async function pegarIdUser(){
    const url = `https://back-spider.vercel.app/user/listarUsers`
    const response = await fetch(url)

    const data = await response.json()

    let idUsuario = 0

    console.log(data)
    
    data.forEach(function(item){
        if(item.nome == usernameGuardado){
            idUsuario = item.id
        }
    })

    
    return idUsuario
}


async function criarPublicacao(){
    const descricao = document.getElementById('descricao').value
    const idUser = await pegarIdUser()

    const data = {
        descricao: descricao,
        dataPublicacao: dataFormatada,
        imagem: 'https://www.aluralingua.com.br/artigos/assets/professor.jpg',
        local: "Senai Jandira",
        idUsuario: idUser
    }

    const url = "https://back-spider.vercel.app/publicacoes/cadastrarPublicacao"

    const options = {
        method: 'Post',
        headers: {'content-type':'Application/Json'},
        body: JSON.stringify(data)
    }

    
    const response = await fetch(url,options)

    if(response.status == 201){
        alert('Postagem criada')
        window.location.reload()
    }

    return response.status
    
}

async function BaseRecarregarPostagens(){
    const url = `https://back-spider.vercel.app/publicacoes/listarPublicacoes`
    const response = await fetch(url)

    const data = await response.json()

    return data
}

async function curtirPost(id){
    const data = {
        idUser: localStorage.getItem('idUser')
    }


    const url = `https://back-spider.vercel.app/publicacoes/likePublicacao/${id}`

    const options = {
        method: 'Put',
        headers: {'content-type':'Application/Json'},
        body: JSON.stringify(data)
    }

    const response = await fetch(url,options)

    const coracao = document.getElementById(id)

    if(response.status == 200){
        coracao.src = '../img/blueHeart.png'
    }

}

async function recarregarPostagens(){
    const base = await BaseRecarregarPostagens()

    const baseOrdenada = base.reverse()

    baseOrdenada.forEach(async function(item){
        

        const containerPostagem = document.createElement('div')
        containerPostagem.classList.add('containerPostagem')
        const containerInformacoes = document.createElement('div')
        containerInformacoes.classList.add('containerInformacoes')
        const fotoPerfil = document.createElement('div')
        fotoPerfil.classList.add('fotoPerfil')
        const textosPerfil = document.createElement('div')
        textosPerfil.classList.add('textosPerfil')
        const h3Perfil = document.createElement('h3')
        const pPerfil = document.createElement('p')
        const postagem = document.createElement('div')
        postagem.classList.add('postagem')
        const pPostagem = document.createElement('p')
        const imgPostagem = document.createElement('img')
        const interacoes = document.createElement('div')
        interacoes.classList.add('interacoes')
        const coracao = document.createElement('img')
        coracao.classList.add('curtida')
        const comentarios = document.createElement('img')

        const url = `https://back-spider.vercel.app/user/pesquisarUser/${item.idUsuario}`
        const response = await fetch(url)
        const data = await response.json()

       
        fotoPerfil.style.backgroundImage = `url('${data.imagemPerfil}')`
        h3Perfil.textContent = data.nome
        pPerfil.textContent = item.local
        pPostagem.textContent = item.descricao
        imgPostagem.src = item.imagem
        coracao.src = '../img/blackHeart.png'
        coracao.id = item.idUsuario
        coracao.addEventListener('click', () => curtirPost(item.idUsuario))


        
        comentarios.src = '../img/comments.png'


        interacoes.appendChild(coracao)
        interacoes.appendChild(comentarios)
        
        containerInformacoes.appendChild(fotoPerfil)
        containerInformacoes.appendChild(textosPerfil)
        textosPerfil.appendChild(h3Perfil)
        textosPerfil.appendChild(pPerfil)
        postagem.appendChild(pPostagem)
        postagem.appendChild(imgPostagem)

        
        containerPostagem.appendChild(interacoes)
        containerPostagem.appendChild(containerInformacoes)
        containerPostagem.appendChild(postagem)
        containerPostagem.appendChild(interacoes)
        postContainer.appendChild(containerPostagem)
    })

}




recarregarPostagens()
enviarPostagem.addEventListener('click',criarPublicacao)
