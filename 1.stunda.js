// datu Saglabāšana (datu tipi) 



// Mainīgo nosaukumiem biežāk lieto camelCase

// Primitivie
let n1 = 10 //int
let firstNumber = 11.5 //float
let word = "Vārds" //String
let html1 = "<h1>Tas ir teksts</h1>" //String

let sledzis = true //Boolean tips
    sledzis = false //Boolean tips
 
//Saliktie

let masīvs1 = [n1,firstNumber,{},[]];
let objekts1 = {
    vards:"Vitālijs",
    vecums:42,
    adrese:{
        pilsēta:"Rīga",
        Iela: "Maskavas"
    },
    krāsas:["balta","sarkana","melna"]
}

const objekts2 = objekts1

// datu izvade

// 1. console.log()
console.log(objekts2.adrese.pilsēta,masīvs1[1],html1)
// console.error("Ko tu tur dari???")

// 2.document.body.innerHTML
// document.write()

document.body.innerHTML = html1
document.body.innerHTML += objekts2.adrese.Iela
document.body.innerHTML += masīvs1[0]

// Matemātiskās darbības: +,=,*,/,%,**
// darbības ar mainīgajiem

n1++
n1--
n1*=10 //(n1 = n1*10)
n1/=10 //(n1 = n1/10)

// salīdzināšana (>,<,>= <=,==,===)

console.log(n1==="10")

// Loģiskie (&&,||)

console.log(n1=="10" && firstNumber==="11.5")
console.log(n1=="10" || firstNumber==="11.5")


document.body.innerHTML = (16/5.5).toFixed(2)

// Datu ievade

// let atbilde = +prompt("Ievadi skaitli1") //saglabā kā tekstu
// let atbilde2 = +prompt("Ievadi skaitli2") //saglabā kā tekstu

// document.body.innerHTML = atbilde+atbilde2

// Math objekts funkcijas
console.log(Math.trunc(Math.random()*100)+1)


// Darbības ar tekstu
console.log(html1.length)
console.log(html1[4])

let file = "https://picsum.photos/300"
// Konkatenācija
// let html2 = "<img src=\""+file+"\">"

html2 = `<img src="${file}">`

let teksts = "teksts1<br>"


document.body.innerHTML = html2;

result = teksts.toUpperCase()
result = teksts.toLowerCase()
result = teksts.split("")
result = teksts.repeat(100)
result2 = result.replaceAll("teksts","Mācos JS programmēšanu")
result2 = teksts.substring(2)
result2 = teksts.slice(1,-5)
result2 = teksts.concat(result)
result3 = teksts.matchAll(/[a-z,0-9]/g)
result3 = teksts.search(/[A-Z]/g)






document.body.innerHTML = result2;
console.log(result3)





