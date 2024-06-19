import { FC } from "react";

interface DonaOpen {
    isDonate: Boolean,
    clickedClose: () => void
}




const Donation: FC<DonaOpen> = ({ isDonate, clickedClose }) => {
    return (
        <div style={{
            background: "#ffefef",
            opacity: 0.9,
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            padding: 3,
            position: 'fixed',
            top: 5,
            left: 5,
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
            boxShadow: '2px 2px 2px grey'
        }}>

            <h2>All <b>Subscriptions, Donation and Grants</b></h2>
            <b>Should be made to the association account</b>
            <h2>Union Bank</h2>
            <span style={{
                fontSize: 50,
                fontWeight: 'bold',
            }}>0209344980</span>
            <h2>State hight school oyewole</h2>
            <span
                onClick={clickedClose}
                style={{
                    backgroundColor: 'red',
                    padding: '10px',
                    color: 'white',
                    borderRadius: 50,
                }}>X CLOSE</span>
        </div>
    )
}

export default Donation;