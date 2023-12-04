import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import FCramer from "../components/FCramer";

export default function PCramer() {
    return (
        // <div style={{textAlign: "center"}}>
            <div className='Carmerpages'>
                <div className="container-fluid">
                    <div className="border rounded-4 bg-light position-absolute top-50 start-50 translate-middle w-50 h-85 p-3 shadow p-3 mb-5 bg-body rounded" >

                        <center><h1 class="fw-bold">Cramer's Rule</h1></center>
                        <FCramer />
                    </div>
                </div>

            </div>
        // </div>
    );
};