const post = document.getElementById('postContainer')
const enviarPostagem = document.getElementById('enviando')

async function criarPublicacao(){
    const descricao = document.getElementById('descricao').value

    const data = {
        descricao: descricao,
        dataPublicacao: `'${new Date()}'`,
        imagem: 'https://www.aluralingua.com.br/artigos/assets/professor.jpg',
        local: "SENAI",
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
        const postHeader = document.createElement('div')
        postHeader.classList.add('post-header')
        const imgPostagem = document.createElement('img')
        const containerTextos = document.createElement('div')
        containerTextos.classList.add('containerText')
        const h1Titulo = document.createElement('h1')
        const pData = document.createElement('p')
        const pDescricao = document.createElement('p')

        const comment = document.createElement('div')
        comment.classList.add('comment')
        const h1Comentario = document.createElement('h1')
        const pComentario = document.createElement('p')

        
        console.log(String(localStorage.getItem('nome_usuario')))


        postHeader.appendChild(imgPostagem)
        containerTextos.appendChild(pData)
        containerTextos.appendChild(h1Titulo)
        postHeader.appendChild(containerTextos)
        postHeader.appendChild(pDescricao)
        post.appendChild(postHeader)
    }

    console.log(response)

    
}

enviarPostagem.addEventListener('click',criarPublicacao)
