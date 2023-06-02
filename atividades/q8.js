let soma = 0
let quant = 0

while(true){
    idade = Number(prompt("Digite a idade:"))
    if(idade == 0){
        break
    }else{
        if(idade > 18){
            soma = soma + idade
            quant++
        }
    }
}
let media = soma/quant

document.write(`Soma das idades: ${soma} <br>`)
document.write(`Média das idades: ${media}`)
