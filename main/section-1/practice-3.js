'use strict';

function isCollectionIncludeStr(objectB, strOfA) {
    let isInclude = false;
    for (let strOfB of objectB.value) {
        if (strOfA === strOfB) {
            isInclude = true;
            break;
        }
    }
    return isInclude;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let newArr = []
    for (let strOfA of collectionA) {
        if (isCollectionIncludeStr(objectB, strOfA)) {
            newArr.push(strOfA)
        }
    }
    return newArr;
}


