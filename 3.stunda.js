document.addEventListener("DOMContentLoaded",function(){
    // Šis notikums nosaka ka scripts tiek izpildīts tikai pēc pilnīgās lapas ielādes

    // Elementu atlase
    let heading1 = document.querySelector('h1')
    let containerDiv = document.querySelector('.container')
    let textInput = document.querySelector('#inp1')
    let button = document.querySelector('#btn1')

    let paragraph = document.querySelector('p') 
    // Ja elementi atkārtojas tad tiek atlasīts tikai pirmais

    let paragraphs = document.querySelectorAll('p') 
    // Atlasa visus p elementus

    // Satura mainīšana

    heading1.innerText = "Šis teksts ir mainīts ar JS"

    containerDiv.innerHTML = `
        <h2>Pašlaik ir: ${ Date().toString()}</h2>
    `;
    let number = 1;
    for(paragraph of paragraphs){
        paragraph.innerText = "Šī ir "+ number + ". rindkopa!"
        number++
    }

    // Elementu atribūtu maiņa

    let imgEl = document.querySelector('img')
    let imageUrl = "https://picsum.photos/id/4/300"
    let platums = 600


    imgEl.src=imageUrl
    imgEl.width=platums
    imgEl.dataset.imageId = 4

    console.log("Attēla adrese ir: "+imgEl.getAttribute('src'))
    console.log("Attēla adrese ir: "+imgEl.src)







})