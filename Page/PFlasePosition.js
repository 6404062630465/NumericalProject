import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import FFlase from "../components/FFlase";


export default function PFlasePosition() {
    return (
        // <div style={{textAlign: "center"}}>
            <div className='Bisectionpages'>
                <div className="container-fluid">
                    <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50 h-85 p-3 shadow p-3 mt-5 mb-5 bg-body rounded" >

                        <center><h1 class="fw-bold">Flase-Position Method</h1></center>
                        <FFlase />
                    </div>
                </div>

            </div>
        // </div>
    );
};