termo1 = 1
termo2 = 2 

let n = Number(prompt('digite a quatidade de elementos:')); 

for(i=1; i<=n;i++){
    document.write(`${termo1} <br>`)
    a = termo1
    termo1 = termo2
    termo2 = termo2 + a
}