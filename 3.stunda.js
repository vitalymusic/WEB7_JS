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

    // Elementu stila maiņa
    heading1.style.fontSize = "5rem"
    heading1.style.textAlign = "center"
    heading1.style.display="none"

    // Elementu CSS klases maiņa
    heading1.classList.add('accent')
    containerDiv.classList.add('accent')
    containerDiv.classList.remove('accent')
    containerDiv.classList.toggle('accent')
    
    
     function openWindow(){
            window.open("https://ss.com","","toolbar=yes, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=800")

     }

    
    // notikumi




    button.onclick = function(e){
        // Caur atribūtu
        text = textInput.value
        heading1.innerText = text
       
        // sessionStorage.setItem("openedWindow",true)
        sessionStorage.setItem("user","Vitālijs")
       

        if(sessionStorage.getItem("openedWindow")=="true"){
            console.log("aizvērt logu")
            // sessionStorage.setItem("openedWindow",false)
        }else{
             sessionStorage.setItem("openedWindow",true)
             openWindow()
        }

        localStorage.setItem()
        localStorage.getItem()
        
    }

    textInput.oninput = ()=>{
        heading1.innerText = textInput.value
    }

    button.addEventListener("mouseover",function(e){
       this.style.background = "blue"
    })
    button.addEventListener("mouseleave",function(e){
       this.style.background = "yellow"
    })


    document.body.addEventListener("keydown",function(e){
        console.log(e)

        if(e.code == 'Space'){
            changeBackround()
        }
    })

     function changeBackround(){
            background = {
                red:Math.trunc(Math.random()*255),
                green:Math.trunc(Math.random()*255),
                blue:Math.trunc(Math.random()*255),
            }
            // console.log(background)
            document.body.style.transition = "all 0.5s easeIn"     
            document.body.style.background = `
                rgb(${background.red},
                    ${background.green},
                    ${background.blue})`
               

     }


     setInterval(changeBackround,1000)

    
     








   heading1.innerHTML += navigator.language;

//    ļauj noteikt pārlūkprogrammas parametrus


     window.addEventListener("scroll",()=>{
        console.log("lapa noritināta par "+ window.scrollY)
        if(window.scrollY>100){
              console.log("noritintāta")
        }
     })


})