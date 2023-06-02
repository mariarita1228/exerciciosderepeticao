n = Number(prompt("Digite um número inteiro e positivo:"))
cont = 1 
for(i=0;i<n;i++){
    while(true){
        document.write(cont," ")
        if(cont>i){
            document.write("<br>")
            cont = 1
            break
        }
        cont++
    }
}