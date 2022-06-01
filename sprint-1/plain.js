/* const plain = (arr) => {
    const result = [];
    arr.forEach(item => {
      if (Array.isArray(item)) {
        const deepArr = plain(item);
        result.push(...deepArr);
      } else {
        result.push(item);
      }
    })
    return result
} */

 const plain = (arr) => {
     return arr.reduce((result, item) => {
        if (Array.isArray(item)) {
          const deepArr = plain(item);
          result.push(...deepArr);
        } else {
          result.push(item);
        }
        return result
      }, [])
 }