// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/* using break after each case is to tell the compiler to stop at that location in switch case
 once condition matched if there is no break it will execute all the console.logs or conditions */

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}