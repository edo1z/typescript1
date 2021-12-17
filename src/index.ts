type Point = {x:number, y:number};
type P = keyof Point;
const a:P = 'x';
const b:P = 'y';
// const c:P = 'z';

function l<T>(x:T) {
  console.log(`${x} is ${typeof x}`);
}

l('hello');
l({x:10, y:5});
l(12);

type Predicate = (x:unknown) => boolean;
type K = ReturnType<Predicate>;
const p1:Predicate = (x) => (!!x);
const k:K = p1('hoge');
l(p1);
l(k);