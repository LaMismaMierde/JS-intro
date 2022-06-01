let person = {
    name: 'Sasha',
    age: '24',
    gender: 'male'
}
function invert(obj) {
    let invPerson = {};
        for(let key in obj){
            invPerson[obj[key]] = key;
        }
    return invPerson
}

console.log(person);
person = invert(person);
console.log(person)

//попробовать object.keys
// object.ent