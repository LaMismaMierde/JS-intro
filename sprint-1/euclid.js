const euclid = (a, b) => {
    const c = a % b 
    if (c !== 0) {
        euclid(b, c)
    } 
    else {
        console.log(b)
    }
}
euclid(192, 270)