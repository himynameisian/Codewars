/**Given a non-empty array of integers, return the result of multiplying the values together in order. Example: */

function grow(x){
    let newArr = x.map(Number).reduce(function(product, value) {return product * value});
        return newArr
}
console.log(grow([1, 2, 3, 4, 5]))