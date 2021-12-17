type a<T> = {
    x: T,
    y?: number
}
const a1:a<string> = {x:'hoge', y:12};
function b<T>(arg: T): T {
    return arg;
}
const a2 = b(12);
console.log(a2);