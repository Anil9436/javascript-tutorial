const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread operator is to spread the elements of the array
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//flat converts the multiple subarray to the single array 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//returnss false
console.log(Array.from("Hitesh")) // to make array from the name hitesh
console.log(Array.from({name: "hitesh"})) // interesting 
console.log(Array.from([1, 2, 3], (x) => x + x));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


//This makes the array of the scores mentioned above. 
// we can make the array with the elements mentioned.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));