import * as T from './@types/index';
import * as V from './Validation';

const v = new V.LettersOnlyValidator();
const res = v.isAcceptable('hoge');
const res2 = v.isAcceptable('hoge2');
console.log(res, res2);

const a:T.Hoge = 123;
console.log(a);
// window.ether;
// window.hello = () => console.log('hello');