import CoreValues from "../components/Core/cores.component"
import Glance from "../components/glance/glance.component";
import RoadMap from "../components/roadmap/road.component"
import About from "../routes/about/about.routes"
import HomeContext from "../routes/home2/homecontent";
import "./body.style.scss"

import { Routes, Route } from 'react-router-dom';
const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContext/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/glance" element={<Glance/>}/>
        </Routes>
    )
}
export default Body