import './road.styles.scss'

const RoadMap = () => {
    return (
        <div className="mainRoadContainer">
            <div className="header">
                <div className="title">
                    <h1>Our <br/>
                    Roadmap</h1>
                    <div style={{
                        height: "10px",
                        backgroundImage: "linear-gradient(to right, white, yellow)",
                        width: "70%"
                    }}/>
                    <p>We shall take advantage and make the best of the available</p>
                </div>
            </div>
        </div>
    )
}

export default RoadMap;