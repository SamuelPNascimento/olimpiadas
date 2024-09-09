function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let resultados = ""
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    let titulo = ""
    let descricao = ""
    let tags = "" 

    if(campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado !</p>"
        return 
    }
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>`
        }
    }
    if (!resultados ) {
        resultados = "<p> Nada foi encontrado ! Você precisa digitar o nome ou esporte do atleta !</p>"

    }
    section.innerHTML = resultados
}   
