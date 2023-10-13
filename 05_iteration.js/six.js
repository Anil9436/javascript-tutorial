const arr = [ 1,2,3,4];
const arr2 = arr
            .map((item)=>(item*4))
            .map((item)=>item*33)
            .filter((item)=>item>=33)

console.log(arr2)


//map returns to the new array
//filter returns to the new array 
//reduce returns to different array


//reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const name = myNums.reduce((num,currentValue)=>num+currentValue,0)

console.log(name);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const name2 = shoppingCart.map((item)=>item.price)
                          .reduce((item,curr)=>item+curr,0);
console.log(name2)


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);