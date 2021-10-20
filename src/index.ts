const x = 12
const a = (x: number) :number => x + 10
console.log(a(x))

const b: boolean = false
const c: string = 'hoge'
const d: number[] = [1,2,3,4]
const e: [string, number] = ['hoge', 30]
const f: any = 'hoge'
const g: unknown = 'hoge'
const h = (y: number) :void => {console.log(y)}
h(120)
