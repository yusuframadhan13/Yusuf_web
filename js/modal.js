const popup_image = document.querySelector(".popup-image");
let image_modal = document.querySelector("#image-modal");

let image_click = document.querySelectorAll(".image-click");

for(let i = 0; i < image_click.length; i++){
    image_click[i].addEventListener('click',  function(event){
        if(event.target.className == "image-click"){
            
            let image_url = event.target.src;
            image_modal.src = image_url;
        }
        
        popup_image.style.display = "unset";
        document.querySelector("nav").style.display = "none";
    })
}

popup_image.addEventListener('click', function(){
    popup_image.style.display = "none";
    document.querySelector("nav").style.display = "flex";
})
