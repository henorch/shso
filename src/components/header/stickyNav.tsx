import { Link } from "react-router-dom"
import './header.style.scss'


const StickyNav = () => {
    return (
        <div className="sticky">
            <Link to="/">Home</Link>
            <Link to="/">Press Release</Link>
            <Link to="/">Membership</Link>
            <Link to="/">Donation/Grant</Link>
            <Link to="/">releases</Link>
    </div>
    )
}
export default StickyNav