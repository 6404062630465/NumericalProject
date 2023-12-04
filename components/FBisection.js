import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Bisection_Method from '../logic/Bisection_Method';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataTable } from '../logic/Bisection_Method';

export default function FBisection() { //ใช้usestateมาช่วยกำหนดตัวแปร เพื่อให้ค่ามันupdateแล้วหน้าเว็บupdateตาม
	const [L, setL] = useState(0)
	const [R, setR] = useState(0)
	const [Equation, setEquation] = useState('')
	const [root1, setroot] = useState('')
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
	
	let calBisection = (event) => {
		event.preventDefault()

		let roots = Bisection_Method(L, R, Equation);
		setroot(roots.toFixed(6));
	}
	let reload = () => {
		window.location.reload()
	}
	const datanew = DataTable();
	return (
		<div>
			<div className='Bisection'>
				<form onSubmit={calBisection} >

					<div class="mb-3">
						<label>Input Equation</label>
						<input type="text" id="Equation" class="form-control w-50" placeholder="ex. 3x^4+10x+5"
							value={Equation} onChange={(event) => setEquation(event.target.value)} />
					</div>
					<div class="mb-3 row g-3 ">
						<div class="col-auto">
							<label>Input L</label>
							<input type="input" id="inputL" class="form-control w+50"
								value={L} onChange={(e) => setL(e.target.value)} />
						</div>
						<div class="col-auto">
							<label>Input R</label>
							<input type="input" id="inputR" class="form-control w+50"
								value={R} onChange={(e) => setR(e.target.value)} />
						</div>

					</div>
					<div class="mb-3 row g-3">
						<div class="col-auto">
							<button type="submit" class="btn rounded-4 btn-warning">Calculate</button>
						</div>

						<div class="col-auto">
							<button type="Button" class="btn rounded-4 btn-warning" onClick={reload}>Reload</button>
						</div>
					</div>
					<div class="mb-3">
					</div>
				</form>
				<h6 class="fw-light">Equation : {Equation}</h6>
				<h6 class="fw-light">L : {L} R : {R}</h6>
				<h6 class="fw-bold">The Result is : {root1}</h6>
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