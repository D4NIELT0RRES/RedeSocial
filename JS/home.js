const postContainer = document.getElementById('containerPostagem')
const enviarPostagem = document.getElementById('enviando')

const dataAtual = new Date()

const dia = dataAtual.getDate()
const mes = dataAtual.getMonth() + 1
const ano = dataAtual.getFullYear()

const dataFormatada = `${dia.toString().padStart(2,'0')}/${mes.toString().padStart(2,'0')}/${ano}`


async function criarPublicacao(){
    const descricao = document.getElementById('descricao').value

    const data = {
        descricao: descricao,
        dataPublicacao: dataFormatada,
        imagem: 'https://www.aluralingua.com.br/artigos/assets/professor.jpg',
        local: "Senai Jandira",
        idUsuario: 3
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

async function recarregarPostagens(){
    const base = await BaseRecarregarPostagens()

    const baseOrdenada = base.reverse()

    baseOrdenada.forEach(function(item){
        console.log(item)
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
        
        


        containerInformacoes.appendChild(fotoPerfil)
        containerInformacoes.appendChild(textosPerfil)
        textosPerfil.appendChild(h3Perfil)
        textosPerfil.appendChild(pPerfil)

        postagem.appendChild(pPostagem)
        containerPostagem.appendChild(postagem)
        containerPostagem.appendChild(containerInformacoes)
        postContainer.appendChild(containerPostagem)
    })

}





recarregarPostagens()
enviarPostagem.addEventListener('click',criarPublicacao)
