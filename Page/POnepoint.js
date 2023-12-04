import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import FOnepoint from "../components/FOnepoint";


export default function POnepoint() {
    return (
        // <div style={{textAlign: "center"}}>
            <div className='Bisectionpages'>
                <div className="container-fluid">
                    <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50 h-85 p-3 shadow p-3 mt-5 mb-5 bg-body rounded" >

                        <center><h1 class="fw-bold">Onepoint Iteration</h1></center>
                        <FOnepoint />
                    </div>
                </div>

            </div>
        // </div>
    );
};