// let display = document.querySelector(".container .display")

// let buttons = document.querySelectorAll("button")

// let specialCars = ["%", "*", "/", "-", "+", "="]

// let output = ""



// function calculate (btnValue){
//     if (btnValue === "=" && output !== ""){
    
//         output = eval(output.replace("%","/100" ))
    
//     }else if(btnValue === "AC"){
    
//         output = ""
    
//     }else if(btnValue === "DEL"){
    
//         output = output.toString().slice(0, -1);
    
//     }else{
    
//         if(output === "" && specialCars.includes(btnValue)) return ;
//         output+= btnValue
    
//     }
    
//     display.value = output;

// }
// buttons.forEach((button)=>{
//     button.addEventListener("click" , (e) => calculate (e.target.dataset.value));
// })

