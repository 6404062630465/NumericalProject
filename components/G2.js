import * as math from 'mathjs';

const i_arr =[]
const X1_arr =[]
const X2_arr =[]
const Y_root_arr= []

export default function G2(X1,X2,Equation)
{
    // alert( X1_arr.toFixed( 2 ) );
    let ERROR = 0.0000001;
    function func(x)
    {
        /* return x*x*x - x*x +2; */
        const node2 = math.parse(Equation)
        const code2 = node2.compile()
        let scope = {x}
        return code2.evaluate(scope);
    }
    function mid(X1,X2)
    {
        let mids=(X1+X2)/2;
        return mids;
    }
    let i=0;
    let Y = X1;
    while(math.abs((X2-X1)/X2)*100 >= ERROR)
        {
            X1_arr.push(X1);
            X2_arr.push(X2);

            Y = mid(X1,X2);
        
        if(func(Y) === 0 )
        {
            break;
        }
        else if(func(Y)*func(X1) <0 )
        {
            X2 = Y;
        }
        else
        {
            X1 = Y;
        }
        i++
        i_arr.push(i);
        Y_root_arr.push(Y);
    }
    return Y;
}

export function DataTable()
{
    const data = []
    const datax = []
    for(let i=0; i<i_arr.length; i++)
    {
        datax.push({iter:i_arr[i],xL:X1_arr[i],xR:X2_arr[i],xM:Y_root_arr[i]});
    }
    for(let i=0; i<i_arr.length; i++)
    {
        data.push(datax[i]);
    }
    return data;
}

