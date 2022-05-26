function deepcopy(a: any): any {
  // This check should always be first as array is also instance of Object class
  if (a instanceof Array) {
    const b = [...a];

    for (let i = 0; i < b.length; i++) {
      if (b[i] instanceof Array || b[i] instanceof Object)
        b[i] = deepcopy(b[i]);
    }

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

export = deepcopy;
