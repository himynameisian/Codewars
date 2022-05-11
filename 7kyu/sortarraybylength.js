/**Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest. */
function sortByLength (array) {
    const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]
    const asc = array.sort((a,b) => a.length - b.length)
    return asc
  };