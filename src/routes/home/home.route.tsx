import "./home.styles.scss"
import Image from "../../../public/images/pres.jpeg"
import BoardTrustee from "../../components/board/board.component";
import { Link } from "react-router-dom";
const SiderBar = () => {
    return(
       
        <div className="sideBar">
            <p style={{
                border:"1px solid black",
                width:"120px",
                height:"120px"
            }}>Logo</p>
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT US</Link>
            <Link to="/">PRESS & RELEASES</Link>
            <Link to="/">UPCOMINGS</Link>
            <Link to="/">MEETING                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           AND MINUTES</Link>
            <Link to="/">DONATION AND GRANTS</Link>
        </div>
        
    )
}


const  Content = () => {
    return(
        <div className="content">
                    <div className="mainImage">
                        <div className="mainer">
                            <h4>the</h4>
                            <b className="name">STATE HIGH SCHOOL OYEWOLE (SHSO), AGEGE ALUMNI CLASS 2004</b>
                            <p>ASSOCIATION</p>
                        </div>
                    </div>
                    <div className="sticky">
                        <Link to="/">Galleria</Link>
                        <Link to="/">Linkroject @ Glance</Link>
                        <Link to="/">MembershiLink</Link>
                        <Link to="/">Donation</Link>
                        <Link to="/">releases</Link>
                    </div>

                    <div  className="holder">
                        <div className="holder-text">
                            <h4>President Speech</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            <b>-- President Jude </b>
                        </div>
                        <img className="image-holder" src={require("../../pres.jpeg")} alt="images"/>
                    </div>
                    
                    <div className="holder2">
                        <div>
                            <h4>President Speech</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            <b>-- President Jude </b>
                        </div>
                        <h2>Our Aim</h2> 
                    </div>


                    <div style={{
                        padding:"5px",
                        background:"grey"
                    }}><h4>BOARD OF TRUSTEES</h4></div>
                    <BoardTrustee/>
                    <div style={{
                        background:"black",
                        color:"white",
                        minHeight:"120px"
                    }}>
                        <h2>Certification</h2>
                    </div>
                </div>
    )
}
const HomeComponent = () => {
    return (
            <div className="mainContainer">
               <SiderBar/>
               <Content/>
            </div>
        )
}

export default HomeComponent;