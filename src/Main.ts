function deepcopy(a: any): any {
  // This check should always be first as array is also instance of Object
  if (a instanceof Array) {
    const b = [...a];

    a.forEach((x, i) => {
      if (x instanceof Array || x instanceof Object) b[i] = deepcopy(b[i]);
    });

    return b;
  }

  if (a instanceof Object) {
    const b = { ...a };

    for (const key in b) {
      if (b[key] instanceof Array || b[key] instanceof Object)
        b[key] = deepcopy(b[key]);
    }

    return b;
  }

  return a;
}

export default deepcopy;
