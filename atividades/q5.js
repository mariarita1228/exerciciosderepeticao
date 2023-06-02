let base = Number(prompt("digite a base:"));
let expoente = Number(prompt("digite o expoente:"));
let potencia = 1

for(i=1;i<=expoente;i++){
    potencia = potencia*base
}
document.write(potencia)