// Cikli

// do{

// }while()

for(let i=0;i<10;i++){
    document.body.innerHTML+=`Skaitlis: ${i}<br>`
}

let arr1 = [1,2,3,4,5,6,7,8,9];
for(let j=0;j<arr1.length;j++){
    document.body.innerHTML+=`Skaitlis: ${arr1[j]}<br>`
}

for (skaitlis in arr1){
    document.body.innerHTML+=`Skaitlis: ${skaitlis}<br>`
}

// Vecais tips

let k = 0;
while(k < 10){
    document.body.innerHTML+=`Skaitlis: ${k}<br>`
    k++;
}

let l = 0;
do{
    l++;
    if(l==5) continue
    if(l==8) break
    document.body.innerHTML+=`Skaitlis: ${l}<br>`
}while(l <= 10)
let vecums="";
// vecums = prompt("Cik jums ir gadu?")    
// if(nosacījums){
    // seko darbība
// }else{
    // seko otra darbība ja nosacījums nav patiess
    // }


if(vecums >=21){
    document.body.innerHTML+=`Laipni lūdzam`
    
} 
else if(vecums > 16 && vecums< 21){
        document.body.innerHTML+=`Laipni lūdzam`
}else{
    // alert("Pieeja ir aizliegta")
}   

let vards = "Juris"
let html = `<img src=\"${vards.length>3?vards:'defaul'}.jpg">`
document.body.innerHTML+=html;


// switch case

let dienas_numurs = 1;
let diena = "";

switch(dienas_numurs){
    case 1: diena="Pirmdiena";break;
    case 2: diena="Otrdiena";break;
    case 3: diena="Trešdiena";break;
    default:diena = "Cita diena";break;

}
document.body.innerHTML += diena;

// funkcijas

function saskaitisana(sk1,sk2){
    return sk1+sk2
}

let saskaitišana = (sk1,sk2)=>{
     return sk1+sk2
}

let paziņojums = teksts=>teksts.toUpperCase()

document.body.onload = ()=>{
    // alert(saskaitisana(10,34))
    // alert(paziņojums("labrīt"))
}

let dzivoklis1 = {
    platība:"66",
    stāvs:3,
    istabas:3,
    cena:75000,

    paraditInfo:function(){ 
        document.body.innerHTML =  `
            <h1>Dzivoklis</h1>
            <ul>
                <li>Istabas:${this.istabas}</li>
                <li>Platība:${this.platība}</li>
                <li>Cena:${this.cena}</li>
            </ul>         
        `
    }
}


document.innerHTML = dzivoklis1.cena
console.log(dzivoklis1)
// dzivoklis1.paraditInfo()



// Masīvi

let arr3 = []
arr3.push(dzivoklis1)
arr3.push(dzivoklis1)
arr3.push(dzivoklis1)
// elementu pievienošana

arr3.pop()

// elementu dzēšana

arr3.unshift(html)
// Pievieno sākumā
arr3.shift(html)
// dzēš no sākuma

let jaunsMasīvs = arr3.concat(arr1)
console.log(jaunsMasīvs)

jaunsMasīvs = jaunsMasīvs.slice(1, 3);
console.log(jaunsMasīvs)

// meklēšana masīvā
let skaitļi = [1,3,4,15,22,6,37,8,9];

let result = skaitļi.findIndex(function(elements,i,masīvs){
    if(elements%2==0) return elements
})
result = skaitļi.find(function(elements,i,masīvs){
    if(elements%2==0) return elements
})

console.log(result)

result = skaitļi.filter(function(elements,i,masīvs){
    if(elements%2==0) return elements
})
console.log(result)


result = skaitļi.map(function(elements,i,masīvs){
   
        return elements*masīvs[i]
    
})

// Teksta kārtošana
result = skaitļi.sort();

// skaitļu kārtošana
result = skaitļi.sort(function(a,b){
    return a-b
});
console.log(result)



let krājumi = [
    {
        nosaukums:"Riepas",
        daudzums:3
    },
    {
        nosaukums:"Bamperi",
        daudzums:0
    }
]

krājumi.forEach(function(elements){
    if(elements.daudzums==0){
        return elements
    }
})

result = krājumi.filter(function(elements){
    if(elements.daudzums==0){
        return elements
    }
})


// Datumi JS

// lai izveidotu datuma objektu 
let datums1 = new Date()

tekošaisLaiksMilisekundes = Date.now()
laiksPēcDesmitStundām = tekošaisLaiksMilisekundes+(1000*3600*10)
datums3 = new Date(laiksPēcDesmitStundām)
datums2 = new Date(tekošaisLaiksMilisekundes)
// atgriež milisekundes, kas pagāja no 1970.01.01


console.log(datums1)
console.log(datums3)

// Laika un datuma izvade
function mūsuLaiks(){
    let datums1 = new Date()
        let laiks = {
            stundas:datums1.getHours()<10?"0"+datums1.getHours():datums1.getHours(),
            minutes:datums1.getMinutes(),
            sekundes:datums1.getSeconds(),
            datums:datums1.getDate(),
            menesis:datums1.getMonth()+1,
            gads:datums1.getFullYear(),
        }
    document.body.innerHTML = `
        <h1>Pašlaik ir: ${laiks.stundas}:${laiks.minutes}:${laiks.sekundes}</h1>
        <h2>Šodien ir: ${laiks.datums}.${laiks.menesis}.${laiks.gads} </h2>
    `    
}
mūsuLaiks();

setInterval(()=>{
    mūsuLaiks()
},1000)




