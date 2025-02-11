function zipList(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Lists must be of equal length');
    }
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Lists must be of equal length');
    }
    return list1.reduce((acc, item, index) => {
        acc.push(item, list2[index]);
        return acc;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
