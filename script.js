let showBtn = document.querySelector(".show-modal");
let overlay = document.querySelector(".overlay");
let modalBox = document.querySelector(".modal-box");
let closeBtn = document.querySelector(".close-btn");
let closeIcon = document.querySelector(".fa-x");
showBtn.classList.remove("hidden1");
console.log(overlay);
showBtn.addEventListener("click",function(){
showBtn.classList.add("hidden1");
modalBox.classList.remove("hidden2");
overlay.style.opacity = 1; 
});

closeBtn.addEventListener("click",function(){
modalBox.classList.add("hidden2");
showBtn.classList.remove("hidden1");
overlay.style.opacity = 0;
});

closeIcon.addEventListener("click",function(){
modalBox.classList.add("hidden2");
showBtn.classList.remove("hidden1");
overlay.style.opacity = 0;
});

document.addEventListener("keydown",function(e){
console.log(e);
console.log(e.key);
console.log(e.target);
if(e.key = "Escape"){
modalBox.classList.add("hidden2");
showBtn.classList.remove("hidden1");
overlay.style.opacity = 0;
}
});

overlay.addEventListener("click",function(){ 
console.log("clicked overlay");  //! bu blok işləmədi
modalBox.classList.add("hidden2");
showBtn.classList.remove("hidden1");
overlay.style.opacity = 0;
});