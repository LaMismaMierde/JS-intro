  const sort = (str) => {
    function sortComparer(a,b){
      return a.localeCompare(b)
    };
    let strArray = str.split(" ")
    let newArray = strArray.map(word => {
      let wordSplit = word.split('');
      wordSplit = wordSplit.sort();
      for (const [index, letter] of wordSplit.entries()) {
        if (index == 0 && (letter == letter.toLowerCase())) {
          wordSplit[index] = letter.toUpperCase();
        } else if (index != 0 && (letter == letter.toUpperCase())) {
          wordSplit[index] = letter.toLowerCase();
        }
      }
      word = wordSplit.join("")
      return word
    })
    newArray = newArray.sort(sortComparer)
    return newArray.join(' ')
  }
