import * as math from 'mathjs';
import Tablebis from './Tablebis';

export default function Bisection_method(a,b,eq){
    let Error_rate = 0.0000001;
    let i=0;
    function func(x)
        {
            const node2 = math.parse(eq)
            const code2 = node2.compile()
            let scope = {x}
            return code2.evaluate(scope);
        } 
    let xm = a;
    while(math.abs((b-a)/b)*100 >= Error_rate)
    {
        // let i=0;
        xm =(a+b)/2;// Find middle point

        if (func(xm) === 0.0){// Check if middle point is root
                break;
        }
        else if (func(xm) * func(a) < 0){// Decide the side to repeat the steps
            b = xm;
        }
        else{
            a = xm;
        }
        // ##############################
        Tablebis(i,a,b,xm);
    }
    
    return xm ;
}