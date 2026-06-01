// 1. Img,button,div
let image_count = 100;
let imgEl = document.createElement('img');
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let carouseldiv = document.createElement('div');
let imagesDiv = document.createElement('div');

let dialogEl = document.createElement('dialog');
let dialogImage = document.createElement('img');
dialogEl.append(dialogImage)


let images = [];

for(let i = 0;i<image_count;i++){
    images.push(`https://picsum.photos/id/${Math.trunc(Math.random()*255)}/500`)
}


let imageNumber = 0

imgEl.src = images[imageNumber]
button1.textContent = "<"
button1.addEventListener("click",()=>{
    imageNumber--

    if(imageNumber<0){
         imageNumber = images.length-1
    }
    
    
    imgEl.src = images[imageNumber]

})

button2.textContent = ">"
button2.addEventListener("click",()=>{
    imageNumber++
    if(imageNumber>images.length-1){
         imageNumber = 0
    }
    console.log(imageNumber);
    imgEl.src = images[imageNumber]
})

carouseldiv.append(imgEl,button1,button2);

imagesDiv.id = "gallery"
for(image of images){

    let img = document.createElement("img")
    img.src = image
    img.width=150
    imagesDiv.append(img)
}

document.body.append(carouseldiv)
carouseldiv.insertAdjacentElement("beforebegin",imagesDiv)



imagesElements = document.querySelectorAll('#gallery img');
 document.body.append(dialogEl)

for(image of imagesElements){
    image.addEventListener("click",(e)=>{
        dialogImage.src = e.target.src
        dialogEl.showModal()
    })
}

document.body.addEventListener("click",(e)=>{
   if(e.target==dialogEl){
         dialogEl.close()
    }
    // 
})
