// 1. dokumenta īpašību maiņa

document.title = "Jauns virsraksts"
console.log(document.head)

// 2. elementu izveide ar JS
let ul1 = document.createElement("ul")

for(let i = 0;i<5;i++){
    let li = document.createElement("li")
    li.textContent = "Elements "+(i+1)
    ul1.append(li);
}

document.body.append(ul1)

let ul2 = ul1.cloneNode(true)

document.body.append(ul2)
visrsraksts = document.querySelector('h1')

visrsraksts.insertAdjacentElement("afterend",ul2)
visrsraksts.remove()

let liElements = ul2.querySelectorAll('li')

liElements[4].remove();

let htmlCode = "<table>"
for(let j=1;j<=10;j++){
    htmlCode+="<tr>"
        for(let k=1;k<=10;k++){
            htmlCode+=`<td>${j*k}</td>`
        }
    htmlCode+="</tr>"
}
htmlCode+="</table>"
console.log(htmlCode);

document.body.insertAdjacentHTML("afterbegin",htmlCode)





