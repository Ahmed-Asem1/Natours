// Start Navbar
let spanIcon = document.querySelector("span.icon");
let divBackground = document.querySelector(".background");
let ulList = document.querySelector("ul.list");

spanIcon.addEventListener("click", ()=>{
    divBackground.classList.toggle("active-background");

    if(divBackground.classList.contains("active-background")){
        ulList.classList.toggle("active-animation");
        spanIcon.classList.toggle("rotate-span");
        ulList.classList.remove("remove-animation")

    }else{
        spanIcon.classList.remove("rotate-span");
        ulList.classList.toggle("remove-animation")
        ulList.classList.remove("active-animation");
    }

    
})
// End Navbar

// Start OutDoor Section
let h1OutDoors = document.querySelector(".out-doors");
let pLifeHappens = document.querySelector(".life-happens");
let aDescover = document.querySelector(".descover");


window.addEventListener("load", ()=>{
    h1OutDoors.classList.toggle("translate");
    pLifeHappens.classList.toggle("translate");
    aDescover.classList.toggle("translate");

    setTimeout(() => {
        h1OutDoors.classList.remove("translate");
        pLifeHappens.classList.remove("translate");
        aDescover.classList.remove("translate");
    },1000);
})
// End OutDoor Section



// Start Tours Section
let allButtonOpenModal = document.querySelectorAll(".open-modal");
allButtonOpenModal.forEach((button)=>{
    button.addEventListener("click", ()=>{
        document.querySelector("body").style.cssText = "overflowY:scroll";
    })
})
// End Tours Section


// Start Book Section
let allCheckboxInputs = document.querySelectorAll("input[type='checkbox']");
allCheckboxInputs.forEach((input)=>{
    input.addEventListener("click", ()=>{
        input.classList.toggle("active");
    })
})
// End Book Section