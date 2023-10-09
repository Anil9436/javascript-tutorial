//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//need to read about closures



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //this will work because we are hoisting a function 

function addone(num){
    return num + 1
}



addTwo(5) //but this will not work because we are assigning the func to the diffrent variable so this will raise error
const addTwo = function(num){
    return num + 2
}