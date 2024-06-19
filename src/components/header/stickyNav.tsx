import { Link } from "react-router-dom"
import './header.style.scss'
import { useState } from "react"



const StickyNav = () => {
    return (
        <div className="sticky">
            <Link to="/">Home</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Membership</Link>
            <Link to="/">Donation/Grant</Link>
            <Link to="/">News and Events</Link>
        </div>
    )
}
export default StickyNav