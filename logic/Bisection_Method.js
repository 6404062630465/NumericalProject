import * as math from 'mathjs';

const i_arr =[]
const L_arr =[]
const R_arr =[]
const M_root_arr= []

export default function Bisection_Method(L,R,Equation)
{
    let ERROR = 0.0000001;
    function func(x)
    {
        /* return x*x*x - x*x +2; */
        const node2 = math.parse(Equation) //รับค่าสมการ
        const code2 = node2.compile()
        let scope = {x} //รับค่าx
        return code2.evaluate(scope); //ทำให้ใช้ ^ ได้
    }
    function mid(Lx,Rx)
    {
        let mids=(Lx+Rx)/2;
        return mids;
    }
    let i=0;
    let M = L;
    while(math.abs((R-L)/R)*100 >= ERROR)
        {
            L_arr.push(L);
            R_arr.push(R);

            M = mid(L,R);
        
        if(func(M) === 0 )
        {
            break;
        }
        else if(func(M)*func(L) <0 )
        {
            R = M;
        }
        else
        {
            L = M;
        }
        i++
        i_arr.push(i);
        M_root_arr.push(M);
    }
    return M;
}

export function DataTable()
{
    const data = []
    const datax = []
    for(let i=0; i<i_arr.length; i++)
    {
        datax.push({iter:i_arr[i],xL:L_arr[i],xR:R_arr[i],xM:M_root_arr[i]});
    }
    for(let i=0; i<i_arr.length; i++)
    {
        data.push(datax[i]);
    }
    return data;
}

