let soma = 0
let quant = 0
let menorTemp = undefined
let maiorTemp = undefined

while(true){
    temp = Number(prompt("digite a temperatura:"))
    if(temp == ""){
        break
    }else{
        soma = soma + temp
        quant++
        if(temp<menorTemp || maiorTemp==undefined){
            menorTemp = temp 
        }
        if(temp>maiorTemp || maiorTemp==undefined){
            maiorTemp = temp 
        }
    }
}
let media = soma/quant

document.write(`Maior temperatura: ${maiorTemp} <br>`)
document.write(`Menor temperatura: ${menorTemp} <br>`)
