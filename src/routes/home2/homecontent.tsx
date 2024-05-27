import BoardTrustee from "../../components/board/board.component";

interface SpeechProps {
    onClose: () => void;
}


const PresidentSpeech: React.FC<SpeechProps> = ({ onClose }) => {

    return (
        <div style={{
            zIndex: 1,
            position: 'fixed',
            paddingBottom: '10px',
            top: 0,
            width: "100%",
            height: "100%",
            margin: '0px auto',
            background: 'white',
            overflow: 'auto'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}><h4>President speech (Complete)</h4> <button
                onClick={onClose}
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    height: '25px',
                    marginRight: '20px',
                    borderRadius: '5px'
                }}>X CLOSE</button></div>
            <p>It’s with a profound honor as the President of our great association State High School Oyewole (SHSO) Agege, Alumni Class 2004 to have the opportunity to welcome such a distinguished group of individuals. On behalf of the entire alumni association, I would like to extend a warm welcome to each and every one of you.
            </p>
            <p>Our secondary school, State High School Oyewole (SHSO) Agege, holds a special place in our hearts. It is a place where we forged lifelong friendships, learned valuable lessons, and grew into the individuals we are today. The bonds we formed during our time here have stood the test of time, and it is our duty to keep those bonds alive and thriving.
            </p>
            <p>As the association president, my vision is to create a strong and vibrant network of alumni that extends beyond our school days. I believe that by staying connected, we can support and inspire each other in our personal and professional endeavors. Together, we can make a difference in our society, country at large and leave a lasting impact.
            </p>
            <p>Throughout the year, we will be organizing various events and activities to bring our alumni together. From reunions and networking events to career workshops and mentorship programs, there will be something for everyone. I encourage each and every one of us to actively participate and contribute our ideas and talents to make these events truly memorable.
            </p>
            <p>Additionally, our association is not just about events and activities. It is about fostering a sense of belonging and pride in our alma mater. As an alumni, we have a responsibility to give back and support our school in any way we can. Whether it's through scholarships, donations, or volunteering our time and expertise, let us show our gratitude and commitment to the institution that shaped us.
            </p>
            <p>Finally, I want to express my gratitude to all our members and my ever gallant Excos . Your support mean the world to me, because I so much believe that together we can do more and we will.
            </p>
            <p>Thank you once again for your trust and confidence in the executives. I look forward to working with each and every one of us to make our State High School Oyewole (SHSO) Agege, Alumni Class 2004 association the best it can be.
                Up Oyeeeeee….
            </p>
            <b>Thank you.</b>
        </div>
    )
}


const HomeContext = () => {
    const [fullspeech, setFullspeech] = useState<Boolean>(false)

    const handFullSpeech = () => {
        setFullspeech(true)
    }

    const hideSpeech = () => {
        setFullspeech(false)
    }
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
                {fullspeech && <PresidentSpeech onClose={hideSpeech} />}

                <div className="holder-text">
                    <h4>President Speech</h4>
                    <p>It’s with a profound honor as the President of our great association State High School Oyewole (SHSO) Agege, Alumni Class 2004 to have the opportunity to welcome such a distinguished group of individuals. On behalf of the entire alumni association, I would like to extend a warm welcome to each and every one of you.
                    </p>
                    <p>Our secondary school, State High School Oyewole (SHSO) Agege, holds a special place in our hearts. It is a place where we forged lifelong friendships, learned valuable lessons, and grew into the individuals we are today. The bonds we formed during our time here have stood the test of time, and it is our duty to keep those bonds alive and thriving.
                    </p>
                    <button
                        onClick={handFullSpeech}
                        style={{
                            width: '30%',
                            border: "none",
                            float: "right",
                            padding: "20px 5px 20px 5px",
                            cursor: "pointer",
                            textAlign: 'center',
                            borderRadius: '10%',
                        }}>view full Speech</button>
                    <br />
                    <br />

                </div>
                <div style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <img className="image-holder" style={{
                        width: "30%",
                        height: "120px",
                        margin: "4px"
                    }} src={require("../../assets/admin/jude.jpeg")} alt="images" />
                    <b>President Jude Chibuogwu</b>
                </div>
            </div>

            <div style={{
                padding: "5px",
                background: "grey"
            }}><h4>EXECUTIVE MEMBERS</h4></div>
            <BoardTrustee />
        </>
    )
}
export default HomeContext