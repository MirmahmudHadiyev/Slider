(function() {
 const pictures = [
    "i1",
    "i2",
    "i3",
    "i4",
    "i5",
    "i6",
    "i7"
 ];

 let buttons = document.querySelectorAll(".btn");
 let imgDiv = document.querySelector(".img-container");

 let counter = 0;

 buttons.forEach(function(button){
       button.addEventListener("click", function(e){

        if(button.classList.contains('btn-left')){
            counter--
            if(counter < 0){
                counter = pictures.length - 1;
                console.log('nnhnhh')
            }
            imgDiv.style.background = `url('/new_assets/images/${pictures[counter]}.jpg')`
        }

        if(button.classList.contains('btn-right')){
            counter++
            if(counter > pictures.length - 1){
                counter = 0;
            }
            imgDiv.style.background = `url('/new_assets/images/${pictures[counter]}.jpg')`
        }
    
       })
 })

})