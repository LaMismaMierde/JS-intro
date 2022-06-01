const badResult = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
};
console.log(badResult());

//call / apply / bind