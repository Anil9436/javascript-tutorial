### First Project in my way

##### colour changer project which changes to dark mode when switch toggles
```Javascript

console.log("JavaScript-Tutorial");
const body = document.querySelector("body") //to make background whole screen
const slider = document.querySelector("input") //to fetch the toggle button
slider.addEventListener('click',(e)=>{
    if(e.target.checked)
    {
       body.style.background="black" // if toggle is check then black
    }else{
    body.style.background="white" // if toggle is released then normal white
    }
    
})

```