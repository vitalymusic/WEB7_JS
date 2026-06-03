// 1. Kas ir JSON
// 2. Lokāla JSON faila nolasīšana un attēlošana

let containerDiv = document.querySelector('.container')
fetch('dati.json')
    .then((dati)=>dati.json())
    .then((dati)=>parādītDatus(dati,containerDiv))



function parādītDatus(dati,elements){
        // for(user of dati){
        //     elements.innerHTML+=`
        //         <div class="user">
        //             <h1>${user.name}</h1>
        //             <p>${user.about}</p>
        //         </div>
        //     `
        // }

        dati.map((user)=>{
            elements.innerHTML+=`
                 <div class="user">
                     <h1>${user.name}</h1>
                     <p>${user.about}</p>
                 </div>`
        })

}    