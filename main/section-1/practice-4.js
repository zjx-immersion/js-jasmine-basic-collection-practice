'use strict';

function collectSameElementsNormal(collectionA, objectB, getKey, isCollectionIncludeStr) {
    let newArr = []
    for (let objectOfA of collectionA) {
        if (isCollectionIncludeStr(objectB, getKey(objectOfA))) {
            newArr.push(getKey(objectOfA))
        }
    }
    return newArr;
}

module.exports = function collectSameElements(collectionA, objectB) {
    const getKey = (object) => object.key;
    const isCollectionIncludeStr = (objectB, strOfA) => {
        let isInclude = false;
        for (let strOfB of objectB.value) {
            if (strOfA === strOfB) {
                isInclude = true;
                break;
            }
        }
        return isInclude;
    }
    return collectSameElementsNormal(collectionA, objectB, getKey, isCollectionIncludeStr);

}
