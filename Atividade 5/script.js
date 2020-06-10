var n1 = prompt("digite um numero")
var n2 = prompt("digite um numero")
var n3 = prompt("digite um numero")


if(n1 > n2){
    if(n1 == n3)
        console.log(`os maiores sao ${n1} e ${n3}`)
    else
        console.log(`o maior eh ${n1}`)
}
else if(n1 > n3){
    if(n1 == n2)
        console.log(`os maiores sao ${n1} e ${n2}`)
    else
        console.log(`o maior eh ${n1}`)
}
else if(n2 > n1){
    if(n2 == n3)
        console.log(`os maiores sao ${n2} e ${n3}`)
    else
        console.log(`o maior eh ${n2}`)
}
else if(n2 > n3){
    if(n2 == n1)
        console.log(`os maiores sao ${n2} e ${n1}`)
    else
        console.log(`o maior eh ${n2}`)

}
else if(n3 > n1){
    if(n3 == n2)
        console.log(`os maiores sao ${n3} e ${n2}`)
    else
        console.log(`o maior eh ${n3}`)
}
else if(n3 > n2){
    if(n3 == n1)
        console.log(`os maiores sao ${n3} e ${n1}`)
    else
        console.log(`o maior eh ${n3}`)

}
else
    console.log("os 3 sao iguais")


