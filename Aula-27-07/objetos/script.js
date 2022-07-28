/* window.alert("funcionou"); */
let nomes = ["ana", "bruno", "carlos"];
console.log(nomes);

let primeiro = nomes[0];
console.log(primeiro);

let tamanho = nomes.length;
console.log("a lista possui " + tamanho + " elementos");

nomes[0] = nomes[0] = "Ana maria";
/* nomes[0] = nomes[0] + " Maria"; */
/* nomes[0] += " Ana maria"; */
nomes.push("Daniel", "Edson", "Fernando"); //Adiciona algo no final da lista

nomes.pop(); //Remove o último elemento da lista
console.log(nomes);

nomes.shift(); //Remove o primeiro elemento da lista
console.log(nomes);

nomes.unshift("Tairzim"); //Adiciona um elemnto na primeira posição da lista
console.log(nomes);

for (let i = 0; i <= nomes.length; i++) {

    console.log()
}

console.log("====FOR OF====")

for (let nome of nomes) {
    
    console.log(nome)
}

console.log("=============")

let fixa = {
    nome: "ana", 
    idade: 30, 
    cidade: "ituiutaba", 
    devendo: false,
};

let campo = "nome";
console.log(fixa["idade"]);

console.log("====FOR IN=====")

for (let item in fixa) {
    console.log(item, fixa[item]);
}

console.log("=============================");

let alunos = [
    {
        nome: "ana",
        nota: 9.7,
        disciplinas: [
            
        ]

    },

    {
        nome: "bruno",
        nota: 2.4
    },

    {
        nome: "Carlos",
        nota: 6.0,
    }
];


for (let nomes of alunos) {
    console.log(nomes.nome)
};
console.log("manipulando html");

let infoNome = document.getElementById("infoNome");
let infoDiciplina = document.querySelector("#infoDiciplinas"); //Usando seletor css

console.log(infoDiciplina);

infoNome.innerText = alunos[0].nome

let html = "";

for (let i = 0; i < alunos[0].disciplinas.length; i++) {
    let nomeDisc = alunos[0].disciplinas[i].nome;
    let status = alunos[0].disciplinas[1].cusado == true ? 'cursado' : 'cursando';

    html += `<b>${nomeDisc}</b> (${status})`;
}

infoDiciplina.innerHTML = html;