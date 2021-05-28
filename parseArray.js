const arrayToJson = array => {
  if (array === null) return null;
  if (array.length === 1) return { id: array[0] };
  if (array.length === 3) {
    return {
      id: array[0],
      left: arrayToJson(array[1]),
      right: arrayToJson(array[2]),
    };
  }
  return 'Invalid format';
};

console.log(
  JSON.stringify(
    arrayToJson([
      'a',
      ['b', ['b1'], ['b2', ['b21'], ['b22']]],
      [
        'c',
        ['c1', ['c11', ['c111']], ['c12', null, ['c121']]],
        ['c2', null, ['c21']],
      ],
    ])
  )
);
