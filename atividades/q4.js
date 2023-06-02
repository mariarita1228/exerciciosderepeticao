let n = Number(prompt(`digite o número natural`))
let ehPrimo = true

if(n<0){
    document.write("NATURAL, POR FAVOR!")
}else if(n<2){
    document.write(`o número ${n} não é primo.`)
}else{
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            ehPrimo = false
            break
        }else{
            ehPrimo = true
        }
    if(ehPrimo && n >= 2){
        document.write(`${n} é primo`)
    }else{
        document.write(`${n} não é primo`)
    }
    }
}
