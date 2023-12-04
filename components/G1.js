import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataTable } from './G2'
import G2 from './G2';


export default function G1() {
    const [X1, setX1] = useState(0)
    const [X2, setX2] = useState(0)
    const [Equation, setEquation] = useState('')
    const [root1, setroot] = useState([])
    // const [M, setM] = useState(0)
    // const data = [
    // 	{
    // 	  name: 'XM',
    // 	  data: root1
    // 	},
    // 	{
    // 	  name: 'XL',
    // 	  data: L
    // 	},
    // 	{
    // 	  name: 'XR',
    // 	  data: R
    // 	},
    // ]

    let cal = (event) => {
        event.preventDefault()
        // setX1(X1.toFixed(2));
        // setX2(X2.toFixed(2));
        let roots = G2(X1, X2, Equation);
        setroot(roots.toFixed(6));
    }
    // setX1(X1.toFixed(2))
    // for(let i = 0; i<iter; i++)
    // {

    // }
    const datanew = DataTable();
    return (
        <div>
            <div className='Bisection'>
                <form onSubmit={cal} >

                    <div class="mb-3">
                        <label>Input Equation</label>
                        <input type="text" id="Equation" class="form-control w-50" placeholder="ex. 3x^4+10x+5"
                            value={Equation} onChange={(event) => setEquation(event.target.value)} />
                    </div>
                    <div class="mb-3 row g-3 ">
                        <div class="col-auto">
                            <label>Input L</label>
                            <input type="input" id="inputL" class="form-control w+50"
                                value={X1} onChange={(e) => setX1(e.target.value)} />
                        </div>
                        <div class="col-auto">
                            <label>Input R</label>
                            <input type="input" id="inputR" class="form-control w+50"
                                value={X2} onChange={(e) => setX2(e.target.value)} />
                        </div>

                    </div>
                    <div class="mb-3 row g-3">
                        <div class="col-auto">
                            <button type="submit" class="btn rounded-4 btn-warning">Calculate</button>
                        </div>
                    </div>
                    <div class="mb-3">
                    </div>
                </form>
                <h6 class="fw-light">Equation : {Equation}</h6>
                <h6 class="fw-light">X1 : {X1} X2 : {X2}</h6>
                <h6 class="fw-bold">The Result is : {root1}</h6>
                <div className='overflow-auto  ' style={{ height: '500px' }}>
                    <table class="table table-dark " >
                        <thead>
                        <thead>
													<tr>
														<th >Iteration</th>
														<th >XL</th>
                                                        <th >XR</th>
														<th >XM</th>
													</tr>
												</thead>
                            <tbody>
                                {datanew.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.iter}</td>
                                            <td>{val.xL}</td>
                                            <td>{val.xR}</td>
                                            <td>{val.xM.toFixed(2)}</td>
                                            {/* <h6>{val.xM}</h6> */}
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </thead>
                    </table>
                </div>
                {/* <div className="overflow-auto"style={{height: '150px'}}>
					<table class="table table-dark">
						<thead>
							<tr>
								<th><center</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
			<div> */}
                <div className='col'>
                    <LineChart
                        width={500}
                        height={300}
                        data={datanew}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="iter" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="xM" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </div>
        </div>
    )
};