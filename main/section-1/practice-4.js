'use strict';

function isCollectionIncluded(objectA, objectB) {
    for (let value of objectA.value) {
        if (value === objectB.key) {
            return true;
        }
    }
}

function collectSameElementsFromDiffTypeCollcetion(collectionA, collectionB, getKey) {
    let newArr = []
    for (let objOfA of collectionA) {
        if (isCollectionIncluded(collectionB, objOfA)) {
            newArr.push(getKey(objOfA));
        }
    }
    return newArr;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let getKey = obj => obj.key;
    return collectSameElementsFromDiffTypeCollcetion(collectionA, collectionB, getKey);

}
