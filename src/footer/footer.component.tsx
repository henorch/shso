import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div style={{
            minHeight: "200px",
            width: "100%",
            background: "black",
            color: "white"
        }}>

            <ul style={{
                listStyleType: 'none'
            }}>
                <li><Link style={{
                    color: 'white'
                }} to="/">Home</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">Press Release</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">Membership</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">Donation/Grant</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">Upcoming</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">@ a Glance</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">Job OPffer</Link></li>
                <li><Link style={{
                    color: 'white'
                }} to="/">Meeting & Minutes</Link></li>

            </ul>
        </div>
    )
}

export default Footer;