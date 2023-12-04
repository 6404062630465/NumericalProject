import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import PBisection from "./Page/PBisection"
import Navbar from "./components/Navbar"
import PHome from "./Page/PHome"
import PFlasePosition from "./Page/PFlasePosition"
import PCramer from "./Page/PCramer"
import POnepoint from "./Page/POnepoint"
// import G from "./components/G"
import G1 from "./components/G1"
// import FCramer from
// import GBisection from "./Graph/GBisection"
import G3 from "./components/G3"
import G4 from "./components/G4"


export default function AppRouter() {
    return(
        <div className="AppRouter">
        <BrowserRouter>

                    <Navbar />
                        
                <Routes>

                <Route path="" element={<PHome />} />

                <Route path="/Home" element={<PHome />} />

                <Route path="/Bisection" element={<PBisection />} />

                <Route path="/Flase-Position" element={<PFlasePosition />} />

                <Route path="/One-Point%20Iteration" element={<POnepoint />} />

                <Route path="/Cramer's-Rule" element={<PCramer />} />

                <Route path="/G3" element={<G3 />} />

                <Route path="/G4" element={<G4 />} />

            </Routes>

        </BrowserRouter>
        </div>
    )
}