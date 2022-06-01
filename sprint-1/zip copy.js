'use strict';

const zip = (object1 = {}, ...otherObjects) => {
    let createdObject = { ...object1 }
    const getKeys = Object.keys
    otherObjects.forEach((obj) => {
        const propertyArray = getKeys(obj)
        const propertyCreatedObject = getKeys(createdObject)
        if (propertyCreatedObject.length == 0) {
            createdObject = { ...createdObject, ...obj }
        } else {
            for (const property of propertyArray) {
                if (!propertyCreatedObject.includes(property)) {
                    createdObject = { ...createdObject, ...obj }
                }
            }
        }
    })
    return createdObject
}