import "./home.styles.scss"
import Image from "../../../public/images/pres.jpeg"

const HomeComponent = () => {
    return (
            <div className="mainContainer">
                <div className="sideBar">
                    <p>HOME</p>
                    <p>ABOUT US</p>
                    <p>PRESS & RELEASES</p>
                    <p>UPCOMINGS</p>
                    <p>MEETING AND MINUTES</p>
                    <p>DONATION AND GRANTS</p>

                </div>
                <div className="content">
                    <div className="mainImage">
                        <div className="mainer">
                            <h4>ALUMNI</h4>
                            <b style={{
                                fontSize:"3em"
                            }}>SHSO'04</b>
                            <p>ASSOCIATION</p>
                        </div>
                    </div>
                    <div style={{
                        width: "100%",
                        borderBottom: "1px solid grey",
                        boxShadow:"2px 2px 2px solid grey",
                        height: "10vh",
                        display:"flex",
                        justifyContent:"space-around"
                    }}>
                        <p>Galleria</p>
                        <p>Project @ Glance</p>
                        <p>Membership</p>
                        <p>Donation</p>
                        <p>releases</p>
                    </div>

                    <div style={{
                        width: "100%",
                        display:"flex",
                        padding:"5px",               
                    }}>
                        <div style={{
                            width:"70%",
                            padding:"5px",
                            color:"white",
                            background:"grey",
                            marginRight:"10px",
                            borderRadius:"5px"
                        }}>
                            <h4 style={{
                                borderBottom:"1px solid black",
                                padding:"10px",  
                                

                            }}>President Speech</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            <b style={{
                                width:"100%",
                                textAlign:"right",
                                color:"white"
                            }}>-- President Jude </b>
                        </div>
                        <img  style={{ 
                            borderRadius:"50%"
                        }} src={require("../../pres.jpeg")} alt="images"/>
                    </div>

                    <div style={{
                        padding:"10px"
                    }}><h4>CURRENT ADMINISTRATION</h4></div>

                </div>
            </div>
        )
}

export default HomeComponent;