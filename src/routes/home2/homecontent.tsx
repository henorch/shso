import BoardTrustee from "../../components/board/board.component";


const PresidentSpeech = () => {
    return (
        <div style={{
            zIndex: 1,
            position: 'fixed',
            padding: '5px',
            top: 60,
            margin: '5px',
            left: 0,
            background: 'white'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}><h4>President speech</h4> <button style={{
                backgroundColor: 'red',
                color: 'white',
                height: '25px',
                borderRadius: '5px'
            }}>X CLOSE</button></div>
            <p>It is with profound honor as the <b>President</b> of our great association  State High School Oyewole (SHSO) Agege, Alumni Class 2004 to have the opportunity to welcome such a distinguished groups of individuals. On behalf of the entire alumni association, I would like to extend a warm welcome to each and everyone of you  </p>
            <p>Our secondary school,State High School Oyewole(SHSO) Agege, holds a special place in our hearts, it is a place where we  forged lifelong friendships,learnedvalued lessons and grew into the individual we are today. The bonds we formed during our time here have stood the test of time, and it is our duty to keep those bonds alive and thriving</p>

        </div>
    )
}


const HomeContext = () => {
    return (
        <>
            <div className="holder" style={{
                display: "flex",
                flexDirection: 'column-reverse',
                background: "white",
                color: "black",
                justifyContent: "space-between",
                maxWidth: "98%",
                marginTop: "10px",
                marginBottom: "10px"
            }}>
                <PresidentSpeech />

                <div className="holder-text">
                    <h4>President Speech</h4>
                    <p>It is with profound honor as the <b>President</b> of our great association  State High School Oyewole (SHSO) Agege, Alumni Class 2004 to have the opportunity to welcome such a distinguished groups of individuals. On behalf of the entire alumni association, I would like to extend a warm welcome to each and everyone of you  </p>
                    <p>Our secondary school,State High School Oyewole(SHSO) Agege, holds a special place in our hearts, it is a place where we  forged lifelong friendships,learnedvalued lessons and grew into the individual we are today. The bonds we formed during our time here have stood the test of time, and it is our duty to keep those bonds alive and thriving</p>
                    <button style={{
                        width: '100%',
                        border: "none",
                        padding: "2px",
                        backgroundColor: "blue",
                        cursor: "pointer",
                        textAlign: 'right'
                    }}>Full Speech</button>
                    <br />
                    <br />

                </div>
                <div style={{
                    width: "100%",
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img className="image-holder" style={{
                        width: "30%",
                        height: "120px",
                        margin: "4px"
                    }} src={require("../../pres.jpeg")} alt="images" />
                    <b>-- President Jude </b>
                </div>
            </div>

            <div style={{
                padding: "5px",
                background: "grey"
            }}><h4>BOARD OF TRUSTEES</h4></div>
            <BoardTrustee />
        </>
    )
}
export default HomeContext