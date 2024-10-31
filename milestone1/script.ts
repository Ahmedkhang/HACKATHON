const button = document.getElementById("btn") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;
let check = 0;
button.addEventListener("click", ()=>{
    if(check == 0){
        
        button.style.backgroundColor = "white";
        button.style.color = "black";
        check = 1;
        button.innerHTML = "Hide Skills";
        skills.style.display = "block";
        button.style.fontWeight = "700";
        button.style.border = "1px solid black"
      }
    else{
           
        button.style.backgroundColor = "black";
        button.style.color = "white";
        check = 0;
        button.innerHTML = "Show Skills";
        skills.style.display = "none";        
    }
});