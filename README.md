# js-deepcopy

_A deep copy of an array/object is a copy whose elements/properties do not share the same references as those of the source array/object from which the copy was made._

Simple package to deep copy an array/object.

Example

```js
const deepcopy = require('js-deepcopy');

const arr = [{ name: 'ABC' }, { name: 'DEF' }];
const obj = { name: 'ABC', skills: ['X', 'Y', 'Z'] };

const new_arr = deepcopy(arr);
const new_obj = deepcopy(obj);

// Here the new array/object and all its elements/properties has different reference than that of input array/object.
// i.e.

console.log(arr[0] === new_arr[0]); // false
console.log(obj.skills === new_obj.skills); // false
```
