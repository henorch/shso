import BoardTrustee from "../../components/board/board.component";


const HomeContext = () => {
    return(
        <>
        <div  className="holder" style={{
            display:"flex",
            background:"white",
            color:"black",
            justifyContent:"space-between",
            maxWidth:"98%",
            marginTop:"10px",
            marginBottom:"10px"
        }}>
                            <div className="holder-text">
                                <h4>President Speech</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                                <b>-- President Jude </b>
                            </div>
                            <img className="image-holder" src={require("../../pres.jpeg")} alt="images"/>
                        </div>
    
                        <div style={{
                            padding:"5px",
                            background:"grey"
                        }}><h4>BOARD OF TRUSTEES</h4></div>
                        <BoardTrustee/>
    </>    
    )
}
export default HomeContext