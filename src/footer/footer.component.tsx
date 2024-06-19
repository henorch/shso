import { Link } from "react-router-dom"
import { FaFacebook, FaSquareFacebook, FaSquareTumblr, FaSquareTwitter, FaSquareWhatsapp, FaSquareYoutube, FaYoutube } from "react-icons/fa6";
import { title } from "process";
import { link } from "fs";

const footerLink = [
    {
        id: 0,
        title: 'Home',
        link: '/'
    },
    {
        id: 1,
        title: 'about us',
        link: '/about'
    },
    {
        id: 2,
        title: 'Gallery',
        link: '/gallery'
    },
    {
        id: 3,
        title: 'Contact',
        link: '/contact'
    },
    {
        id: 3,
        title: 'News & Events',
        link: '/news'
    },
    {
        id: 7,
        title: 'MemberShip',
        link: "/members"
    }
    // 
    // {
    //     id: 4,
    //     title: 'Meeting & Minutes',
    //     link: '/m_andm'
    // },
    // {
    //     id: 5,
    //     title: 'Job Offer',
    //     link: '/job_offers'
    // },


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
        }}>{footerLink.map((link) => <li key={link.id}><Link style={{
            color: 'white',
            margin: '2px',
            padding: '2px'
        }} to={link.link}>{link.title}</Link></li>)}</ul>
    </>
}

const OurCommunity = () => {
    return (
        <div style={{
            marginBottom: '10px'
        }}>
            <div><h3>You can Follow us:</h3>
                <div>

                    <a style={{
                        color: 'white'
                    }} href="https://www.facebook.com/profile.php?id=61559521816722&mibextid=LQQJ4d">
                        <FaSquareFacebook size="50" />
                    </a>
                    <a style={{
                        color: 'white'
                    }} href="https://youtube.com/@statehighschooloyewolecl-ce2sm?si=ycLdaMuuZdYovvw6">
                        <FaSquareYoutube size="50" />
                    </a>
                    <FaSquareTwitter size="50" />
                    <FaSquareWhatsapp size="50" />
                </div>
            </div>
            <div>
                <h4>call or whatsapp (hotline)</h4>
                <ul style={{
                    listStyleType: 'none',
                    margin: '-20px'
                }}>
                    <li><b>07060458490</b></li>
                    <li><b>07033371817</b></li>
                    <li><b>08080191954</b></li>
                    <li> <b>07060835969</b></li>
                </ul>

            </div>


        </div>
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
                        <td>Email</td>
                        <td><input placeholder="enter your name" /></td>
                    </tr>
                    <tr>
                        <td>Telephone</td>
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
            </form >
        </div >
    )
}

const Footer = () => {
    return (
        <div style={{
            width: "100%",
            background: "black",
            color: "white",
            display: "flex",
            fontFamily: 'Quintessential',
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
            &copy; 2024 by SHSO'04 Alumni
        </div>
    )
}

export default Footer;