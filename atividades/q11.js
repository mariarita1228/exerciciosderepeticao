num = Number(prompt("Digite o número:"))

do{
    numTemp = Math.floor(num/10)
    digito = num - numTemp*10
    document.write(digito)
    num = numTemp
}while(numTemp>1)