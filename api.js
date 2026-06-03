function visiProdukti() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(dati => attēlotDatus(dati.products));

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
                        <a href="#" class="btn btn-primary">Skatīt produktu</a>
                    </div>
                    </div>`
        })  
}

function ParādītProduktu(id){

}


visiProdukti()

