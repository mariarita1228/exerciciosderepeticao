let n = Number(prompt("digite um número (o a 255)"));

if(n<0 || n>255){
    document.write("o a 255, pls")
}else{
    for(i=7;i>=0;i--){
        if(n>=2**i){
            document.write("1")
            n = n - 2**i
        }else{
            document.write("0")
        }
    }
}