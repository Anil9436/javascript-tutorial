// const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body") //to make background whole screen
const slider = document.querySelector("input") //to fetch the toggle button
// console.log(slider)
// buttons.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         // switch(e.target.id){
//         //     case "blue":
//         //         body.style.backgroundColor=e.target.id;
//         //         break;
//         //     case "yellow":
//         //         body.style.backgroundColor=e.target.id;
//         //         break
//         //     case "white":
//         //         body.style.backgroundColor=e.target.id;
//         //         break;
//         //     case "grey":
//         //         body.style.backgroundColor=e.target.id;
//         //         break
//         //     default:
//         //         body.style.backgroundColor="#212121";
//         //         break
//         // }
//         console.log(button);
//     })
// } )
slider.addEventListener('click',(e)=>{
    if(e.target.checked)
    {
       body.style.background="black"
    }else{
    body.style.background="white"
    }
    
})