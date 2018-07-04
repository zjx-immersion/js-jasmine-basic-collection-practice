'use strict';

function isCollectionIncluded(object, str) {
    for (let value of object.value) {
            if (value === str) {
                return true;
            }
        }
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = []
    for (let strOfA of collectionA) {
        if (isCollectionIncluded(collectionB, strOfA)) {
            newArr.push(strOfA);
        }
    }
    return newArr;
}