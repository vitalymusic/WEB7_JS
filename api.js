function visiProdukti() {
    fetch('https://dummyjson.com/products?limit=0')
        .then(res => res.json())
        .then(dati => attēlotDatus(dati.products))
        .then(()=>{pievienotKlikšķi()})

}


function attēlotDatus(dati) {
    const elements = document.querySelector('.products')
    dati.map((item) => {
        elements.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.price}</p>
                        
                    </div>
                    <div class="card-footer text-center">
                        <a href="#" class="btn btn-primary showProductBtn" data-id=${item.id}>Skatīt produktu</a>
                    </div>
                    </div>`
        })  
}

function ParādītProduktu(id){
   fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((produkts)=>{
            // Salikt datus modālajā logā
            document.querySelector('.modal-body').innerHTML = `
            <h3>${produkts.title}</h3>
            <p>${produkts.description}</p>
            <div class="images d-flex justify-content-center gap-3 px-3">
            </div>`

          produkts.images.map((image,i)=>{
                 document.querySelector('.images').innerHTML+=`
                        <img src="${image}" class="img-thumbnail w-25" alt="${produkts.name} ${i}">`            

        })
    })
        .finally(()=>{
            const modal = new bootstrap.Modal('.modal')
            modal.show()
        })
}


visiProdukti()

function pievienotKlikšķi(){
    let btns = document.querySelectorAll('.showProductBtn')
for(btn of btns){
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        ParādītProduktu(e.target.dataset.id)
    })
}


}


// Jāizvelk visas iespējamas kategorijas un no tām jāizveido navigācija

// fetch('https://dummyjson.com/products/category-list')

// Klikšķinot uz konkrētas kategorijas parādās tikai tie produkti, kas ir šajā kategorijā
// fetch('https://dummyjson.com/products/category/smartphones')

// pierakstīt trūkstošās funkcijas
// Pielāgot dizainu un ja paliek laiks tad pevienot sakārtošanu pēc cenas

// fetch('https://dummyjson.com/products?sortBy=price&order=asc')
