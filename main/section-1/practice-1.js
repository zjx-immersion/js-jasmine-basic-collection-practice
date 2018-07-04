'use strict';

function isCollectionIncluded(collection, str) {
    for (let s of collection){
        if(s === str) {
            return true;
        }
    }
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = []
    for (let strOfA of collectionA){
            if(isCollectionIncluded(collectionB, strOfA)) {
                newArr.push(strOfA);
            }
    }
    return newArr;
}


