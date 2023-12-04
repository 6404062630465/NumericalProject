import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Bisection_method from './Testbisec'

export default function Formbis()
{
    const [a, seta]=useState(0)
    const [b, setb]=useState(0)
    const [equation,setequation]=useState('')
    const [root1,setroot]=useState('')
    
    let calBisection = (event) => {
        event.preventDefault()
    //############################################ BISECTION METHOD ########################################
       let roots= Bisection_method(a,b,equation);
       setroot(roots.toFixed(6));
    }
    //############################################ reload pages ############################################
        let reload=()=>{
			window.location.reload()
        }
    return(
        <div>
            <div className='Formbis'>
        <form onSubmit ={calBisection} >
					<div class="mb-3">
								<label >Input Equation</label>
								<input type="text" class="form-control w-85 p-3 " id="formGroupExampleInput" 
									value={equation} onChange={(event)=> setequation(event.target.value)} />
							</div>
								<div class="mb-3 row g-3">
									<div class="col">
										<label>Input A</label>
											<input type="number" class="form-control w-45 p-3 " id="formGroupExampleInput" step={0.1}
                								value={a} onChange={(e)=> seta(e.target.value)}/>	
									</div>

							<div class="col">
								<label>Input B</label>
									<input type="number" class="form-control w-45 p-3" id="formGroupExampleInput" step={0.1}
										value={b} onChange={(e)=> setb(e.target.value)} />
								</div>
												
							</div>
								
					<div class="mb-3 row g-3">
						<div class="col">
							<button type="submit" class="btn btn-primary border border-2 
							form-control w-35 p-3" >Calculate</button>
						</div>

						<div class="col">
							<button type="button" class="btn btn-secondary border border-2 form-control w-35 p-3" 
									onClick={reload}>Reload</button>
						</div>
					</div>						
			</form>	
					<h5>Equation {equation}</h5>
					<h5> A is {a} </h5>
					<h5>B is {b} </h5> 
					<h5>Root is {root1}</h5>
					{/* ############## */}
				
        	</div>
        </div>
    )
};