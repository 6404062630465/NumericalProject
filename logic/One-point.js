import * as math from 'mathjs';

const i_arr =[]
const x_arr =[]
const x_root_arr= []

export default function Onepoint(x,Equation)
{
    let ERROR = 0.0000001;
    function func(x)
    {
        /* return x*x*x - x*x +2; */
        const node2 = math.parse(Equation)
        const code2 = node2.compile()
        let scope = {x}
        return code2.evaluate(scope); //ทำให้ใช้ ^ ได้
    }
    function onefunc(x)
    {
        /* return x*x*x - x*x +2; */
        const node1 = math.parse(Equation)
        const code2 =  math.derivative(node1, 'x');
        const code3 = code2.compile()
        let scope = {x}
        return code3.evaluate(scope); //ทำให้ใช้ ^ ได้
    }
    let i=0;
    let h = func(x)/onefunc(x);
    while(math.abs(h) >= ERROR)
        {
            x_arr.push(x);
            h = func(x)/onefunc(x);
            x = x-h;

            i++
        i_arr.push(i);
        x_root_arr.push(x);
    }
    return x;
}

export function DataTable()
{
    const data = []
    const datax = []
    for(let i=0; i<i_arr.length; i++)
    {
        datax.push({iter:i_arr[i],xL:x_arr[i],xM:x_root_arr[i]});
    }
    for(let i=0; i<i_arr.length; i++)
    {
        data.push(datax[i]);
    }
    return data;
}

