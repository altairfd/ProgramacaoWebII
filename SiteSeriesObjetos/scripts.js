document.querySelector("header .poster img").setAttribute(`src`, bd.fotoPoster);

document.querySelector("header .info h1").innerHTML = bd.nome;
document.querySelector("header .info .generos").innerHTML = bd.generos;
document.querySelector("header .info p").innerHTML = bd.resumo;
document.querySelector("header .info .nota").innerHTML = bd.nota;
document.querySelector("header").style.backgroundImage = `url("${bd.fotoBg}")`;

//Elenco
document.querySelector(".elenco .elenco-container").innerHTML = '';

for (let ator of bd.elenco) {
    let html = `
    <div class="ator">
    <img src= "${ator.foto}"/>
    <span class="nome">${ator.nome}</span>
    <span class="personagem">${ator.personagem}</span>
    </div>
    `;
    document.querySelector(".elenco .elenco-container").insertAdjacentHTML("beforeend", html);
    //Adiciona o conteudo de html para antes do fim da tag
}

//AdjacentHTML envolve ao lado os valores

//Temporadas
document.querySelector(".temporadas .temporadas-container").innerHTML = "";
for (let temporada of bd.temporadas) {
    let n = temporada.numero;

    let html = `
    <div class="temporada">
    <div class="poster">
        <img src="${temporada.poster}"/>
    </div>
    <div class="info">
        <h3>Temporada ${temporada.numero}</h3>
        <div class="subtitulo">
            ${temporada.exibicao} | ${temporada.numero_episodios}
        </div>
        <p class="sinopse">${temporada.resumo}</p>
        <a href="#" class="botao" id="btn-${n}">Ver episódios</a>
        <div class="episodios" id="episodio-${n}"></div>
    </div>
    </div>
    `;
    document.querySelector(".temporadas .temporadas-container").insertAdjacentHTML("beforeend", html);
    document.querySelector(`#btn-${n}`).addEventListener("click" , function (ev) {
        mostrarEp(ev, n)
    });

}

function mostrarEp(ev, id) {
    ev.preventDefault();
/*     document.querySelector(`#episodios-${id}`).innerHTML = "Carreguei."; */

    for (ep of bd.temporadas[id - 1].episodios) {
        let html = `
        <div class="episodio">
            <div class="foto">
            <img src="${ep.foto}"/>
                <span class="nota"> 
                    <img src"star.png"/> ${ep.nota}
                </span>
            </div>
            <div class="info">
                <h4>${ep.numero} | ${ep.nome}</h4>
                <p>${ep.resumo}</p>
            </div>
        <div/>
        `;
        document.querySelector(`#episodio-${id}`).insertAdjacentHTML('beforeend', html);
    }
}