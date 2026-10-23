//comments
document.write("Olá, Mundo!")
//variaveis, tipos de dados
var testvar = " Mundo!" 
//const testconst = "Olá,"
//document.write(testconst + testvar)

//string
const s1 = "Isso é uma string! "
const s2 = 'Isso é uma String! '
const s3 = `Isso é uma string! `
document.write(s1)
document.write(s2)
document.write(`Isso é uma string! `)

//number
const n1 = 1
const n2 = 12
document.write(n1 + n2)

//boolean - true ou false
const bTrue = true
const bFalse = false
document.write(bTrue)

//Objeto - Possuem propriedades e funcionalidade
const pessoa = {
  altura: "1.80 m",
  idade: 24,
 solteiro: true,
  
  correr(){
    document.write("run Forest!")
    return " run Forest!"
    document.write("Executar uma grande lógica de correr!")
  }
}
pessoa.correr()

//Array - Vetores
const colecaoDeBolinhas = ["Blue", "green", 1, {name: "My Name"}]
document.write(colecaoDeBolinhas[3].name)

//Funções - Funcionalidades - Atalhos - Reuso de código
//registrar a função
function sayMyName(name){
  document.write(name)
}
//executar a função
sayMyName("João Marcos ")
sayMyName("Poliane ")
sayMyName("Ellen ")
sayMyName("Elza ")
sayMyName("Neto ")
sayMyName("Maria ")
sayMyName("Jésica ")
sayMyName("João Pedro ")

//Condicionais
const notaFinal = 7
if(notaFinal < 5){
document.write("Reprovado!")
} else {
document.write("Aprovado!")
}

//Loop - Repetições
for(i = 0; i < 10; i++){
  document.write("<p> Olá, Mundo! </p>")
  document.write(`<p>${i}</p>`)
}