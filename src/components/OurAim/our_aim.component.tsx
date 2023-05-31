const AimComponent = () => {
    return(
        <div style={{
            display:"flex",
            border:"1px solid black",
            justifyContent:"space-between"
        }}>
            <div style={{
                display:"flex",
                background:"yellow",
                width:"60%",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center"
            }}><b style={{
                fontSize:"5em"
            }}> Our Aim is Clear</b></div>
            <div style={{
                padding:"10px",
                textAlign:"center"
            }}>
                <b>We aim that by the end of year 2003 membership participation will rise to</b>
                <p style={{
                    fontSize: "4em"
                }}>85%</p>
                <b>TRULY INCLUSIVE culture</b>
                <p>With our proposed strategy plan, the aim is to be more membership inclusive ande get the people to be more proactive in the affairs of the association</p>
            </div>
        </div>
    )
}
export default AimComponent