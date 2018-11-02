let a = {}

Object.defineProperty(a, 'foo', {
  configurable: true,
  writable: true,
  enumerable: true,
  value: 1
});

a.foo = 3;
console.log(a.foo);
console.log(Object.keys(a));
