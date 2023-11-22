const Donation = () => {
    return (
        <div style={{
            background: "#ffefef",
            opacity: 0.9,
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            padding: 3,
            position: 'fixed',
            top: 60,
            left: 10,
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
            boxShadow: '2px 2px 2px grey'
        }}>
            <span style={{
                position: 'fixed',
                top: 5,
                left: 380,
                width: 40,
                height: 40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                background: 'white'
            }}>X</span>
            <h2>All <b>Subscriptions, Donation and Grants</b></h2>
            <b>Should be made to the association account</b>
            <h2>Union Bank</h2>
            <span style={{
                fontSize: 50,
                fontWeight: 'bold',
            }}>0209344980</span>
            <h2>State hight school oyewole</h2></div >
    )
}

export default Donation;