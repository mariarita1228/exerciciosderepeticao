let somaGer = 0
let qntPar = 0
let qntImpar = 0
let somaPar = 0

while(true){
    n = Number(prompt("digite um número:"))
    if(n==0){
        break
    }else{
        somaGer = somaGer + n
        if(n%2==0){
            qntPar++
            somaPar = somaPar + n
        }else{
            qntImpar++
        }
    }
}
let mediaPar = somaPar/qntPar
let mediaGer = somaGer/(qntPar+qntImpar)

document.write(`Quantidade de números pares: ${qntPar} <br>`)
document.write(`Quantidade de números ímpares: ${qntImpar} <br>`)
document.write(`Média dos números pares: ${mediaPar .toFixed(2)} <br>`)
document.write(`Média geral: ${mediaGer .toFixed(2)} <br>`)