let button = document.querySelector('.cadastro')
let corpoTabela = document.querySelector('.corpoTabela')

montarTabela()

button.addEventListener("click", () => {
    realizarCadastro()
})

async function realizarCadastro(){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')

    const NOVO_USUARIO = {
        'nome': nome.value,
        'idade': idade.value
    }

    let response = await axios.post('http://localhost:8081/usuario', NOVO_USUARIO)

    console.log(response.data)

    adicionarLinha(response.data)
}

async function montarTabela(){
    let usuarios = await axios.get('http://localhost:8081/usuario')

    console.log(usuarios.data)

    usuarios.data.forEach(usuario => {
        adicionarLinha(usuario)
    })
}

function adicionarLinha(usuario){
    let linha = `
        <tr>
            <td>${usuario.nome}</td>
            <td>${usuario.idade}</td>
        </tr>
    `

    corpoTabela.innerHTML += linha;
}