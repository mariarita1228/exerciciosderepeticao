n = Number(prompt("digite um número inteiro e positivo"))
cont = 0

for(i=n;i>=0;i--){
    while(cont<=i){
        document.write(n)
        cont++
    }
    document.write("<br>")
    cont = 0
}