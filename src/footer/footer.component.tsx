import { Link } from "react-router-dom"
const footerLink = [
    {
        id: 0,
        title: 'Home',
        link: '/'
    },
    {
        id: 1,
        title: 'about us',
        link: '/about_us'
    },
    {
        id: 2,
        title: 'Membership',
        link: '/member'
    },
    {
        id: 3,
        title: 'Grants/Donation',
        link: '/grant_don'
    },
    {
        id: 4,
        title: 'Meeting & Minutes',
        link: '/m_andm'
    },
    {
        id: 5,
        title: 'Job Offer',
        link: '/job_offers'
    },


]


type LinkProps = {
    id: number,
    title: String,
    link: String
}

type linkPropsType = {
    linkProp: LinkProps
}


const FooterLink = () => {
    return <>
        <ul style={{
            listStyleType: "none"
        }}>{footerLink.map((link) => <li><Link style={{
            color: 'white'
        }} to={link.link}>{link.title}</Link></li>)}</ul>
    </>
}

const OurCommunity = () => {
    return (
        <h3>You can Follow us:</h3>
    )
}
const ContactUs = () => {
    return (
        <div>
            <h4>Contact us</h4>
            <sub>Please enter your message below</sub>
            <form>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input placeholder="enter your name" /></td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td><input placeholder="enter title" /></td>
                    </tr>
                    <tr>
                        <td>message</td>
                        <td><textarea style={{
                            height: '50px'
                        }} aria-multiline placeholder="enter yout message" /></td>
                    </tr>
                    <tr><td colSpan={2}><button type="submit">Submit</button></td></tr>
                </table>
            </form>
        </div>
    )
}

const Footer = () => {
    return (
        <div style={{
            width: "100%",
            background: "black",
            color: "white",
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                minHeight: "200px",
                width: "100%",
                display: "flex",
                justifyContent: 'space-around',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <OurCommunity />
                <FooterLink />
                <ContactUs />
            </div>
            copyright &c by Henovative Global Concept
        </div>
    )
}

export default Footer;