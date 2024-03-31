let numero1=Number(prompt("Digite o primeiro número: "))
let numero2=Number(prompt("Digite o segundo número: "))
let numero3=Number(prompt("Digite o terceiro número: "))

if (numero1>numero2 && numero1>numero3){
  window.alert("O maior número é: "+numero1)
}
else if (numero2>numero1 && numero2>numero3){
  window.alert("O maior número é: "+numero2)
}
else{
  window.alert("O maior número é: "+numero3)
}
  

