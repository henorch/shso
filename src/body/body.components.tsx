import { useState } from "react";
import CoreValues from "../components/Core/cores.component"
import Donation from "../components/DonationModel";
import Glance from "../components/glance/glance.component";
import RoadMap from "../components/roadmap/road.component"
import About from "../routes/about/about.routes"
import HomeContext from "../routes/home2/homecontent";
import MemberShipForm from "../routes/membership/membership.component";
import "./body.style.scss"

import { Routes, Route } from 'react-router-dom';
const Body = () => {
    const [isDonate, setIsDonate] = useState<Boolean>(false)
    return (
        <>
            {isDonate && <Donation />}
            <Routes>
                <Route path="/" element={<HomeContext />} />
                <Route path="/about" element={<About />} />
                <Route path="/glance" element={<Glance />} />
                <Route path="/membership" element={<MemberShipForm />} />

            </Routes>
        </>
    )
}
export default Body