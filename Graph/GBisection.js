import { i } from "mathjs";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const GBisection = () => {
export default function FBisection() {
const data = [
  {
    name: 'XM',
    data: data[i]
  },
  {
    name: 'XL',
    data: data[i]
  },
  {
    name: 'XR',
    data: data[i]
  },
  
];
    return (
        // <div style={{textAlign: "center"}}>
            <div className="gBisection">
            {/* <div class="containner"> */}
      {/* <div class="row g-3"> */}
        <LineChart
          width={500}
          height={300}
          data={data}
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
    //   </div>
    );
  }

// export default GBisection;

