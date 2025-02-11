function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }
  const result: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay<T, U>(list1: T[], list2: U[]): (T | U)[] {
  if (list1.length !== list2.length) {
    throw new Error('Lists must be of equal length');
  }

  return list1.reduce((acc: (T | U)[], item: T, index: number) => {
    acc.push(item, list2[index]);
    return acc;
  }, []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
