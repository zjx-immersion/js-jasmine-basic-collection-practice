'use strict';

function isCollectionIncludeStr(collectionB, strOfA) {
    let isInclude = false;
    for (let strOfB of collectionB) {
        if (strOfA === strOfB) {
            isInclude = true;
            break;
        }
    }
    return isInclude;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = []
    for (let strOfA of collectionA) {
        if (isCollectionIncludeStr(collectionB, strOfA)) {
            newArr.push(strOfA)
        }
    }
    return newArr;
}
