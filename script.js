let bar=document.querySelector(".bar");
   let navbar=document.querySelector(".navbar-list");
   bar.addEventListener("click",()=>{
    if(navbar.style.display == "block"){
        navbar.style.display="none";
    }else{
        navbar.style.display="block";
    }
   })