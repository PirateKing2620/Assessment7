// Add to zero
array = []

for (let i = 0; i < array.length; i += 1) {
    if (array[i] + array[i] === 0) {
        console.log('true')
        console.log(array[i])
    } else {
        console.log('false')
    }
}
// 0(n) runtime because we don't know how long array is



// Has unique characters
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
// 0(1) we don't know how big the word but it is only 1 word.


// Pangram Sentence
const isPangram = (str = '') => {
    str = str.toLowerCase()
    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphaArr = alphabets.split('')
    for(let i = 0; i < length; i++){
       const el = str[i]
       const index = alphaArr.indexOf(el)
       if(index !== -1){
          alphaArr.splice(index, 1)
       }
    }
    return !alphaArr.length;
 }
// 0(1)



// Longest Word
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
// 0(n)