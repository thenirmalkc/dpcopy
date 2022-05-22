import deepcopy from '../src/Main';

describe('\nTesting for copy by reference', () => {
  test('Deep copying array should result new array', () => {
    const a = [1, 2, 3, 4, 5];
    const b = deepcopy(a);
    expect(b).not.toBe(a);
  });

  test('Deep copying object should result new object', () => {
    const a = { name: 'James Bond' };
    const b = deepcopy(a);
    expect(b).not.toBe(a);
  });

  test('[ [ [ [ [] ] ] ] ] result new [ [ [ [ [] ] ] ] ]', () => {
    const a = [[[[[]]]]];
    const b = deepcopy(a);
    expect(b[0][0][0][0]).not.toBe(a[0][0][0][0]);
  });

  test('[ [ [ [ {} ] ] ] ] result new [ [ [ [ {} ] ] ] ]', () => {
    const a = [[[[{}]]]];
    const b = deepcopy(a);
    expect(b[0][0][0][0]).not.toBe(a[0][0][0][0]);
  });

  test('{ x: { x: { x: { x: {} } } } } result new { x: { x: { x: { x: {} } } } }', () => {
    const a = { x: { x: { x: { x: {} } } } };
    const b = deepcopy(a);
    expect(b.x.x.x.x).not.toBe(a.x.x.x.x);
  });

  test('{ x: { x: { x: { x: [] } } } } result new { x: { x: { x: { x: [] } } } }', () => {
    const a = { x: { x: { x: { x: {} } } } };
    const b = deepcopy(a);
    expect(b.x.x.x.x).not.toBe(a.x.x.x.x);
  });
});

describe('\nTesting for value', () => {
  test('Deep copying object should result object with same value', () => {
    const a = { name: 'James Bond' };
    expect(deepcopy(a)).toEqual(a);
  });

  test('Deep copying array should result array with same value', () => {
    const a = [1, 2, 3, 4, 5];
    expect(deepcopy(a)).toEqual(a);
  });
});
