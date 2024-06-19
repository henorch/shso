import { FC, useState } from "react"
import './member.scss';


type MemberProps = {
    firstname: "",
    lastname: "",
    sex: "",
    age: "",
    department: "",
    telephone: "",
    email: "",
    profession: "",
}
type MemberInfoProps = {
    member: MemberProps[]
}


const userInfo = [
    "firstname", "Middlename", "Lastname", "Home Address", "City/Town", "State",
    "mobile Phone", "Home Phone", "Work Phone", "Email", "State of Origin", "Home Town", "Occupation",
    "Job title", "Department", "Office Address"
]
type InputInfo = {
    label: String
}

const InputField: FC<InputInfo> = ({ label }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'row',
            borderRadius: '2px',

            border: '1px solid black',
            margin: '5px'
        }}>
            <label style={{
                fontWeight: 'bold',
                backgroundColor: 'grey',
                color: 'white',
                width: '140px',
                fontStyle: 'italic'
            }}><sup>{label}: </sup></label>
            <input style={{
                width: '98%',
                height: '4vh',
                border: 'none'
            }} />
        </div>
    )
}

const MemberShipForm = () => {
    const [memberInfo, setMemberInfo] = useState<MemberInfoProps>();
    return (

        <form>
            <h1>Member Registration</h1>
            <div style={{
                display: 'flex',
                margin: '5px',
                width: '98%',
                flexDirection: "row"
            }}>
                <input type="file" />
                <select style={{
                    width: "60%",
                    height: '5vh'
                }}>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Dr</option>
                    <option>Engineer</option>
                    <option>others</option>
                </select>
            </div>
            {userInfo.map((userinfo) => <InputField label={userinfo} />)}
            <button type="submit" style={{
                width: '80%',
                height: '40px',
                border: 'none',
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '10px',
                marginBottom: '20px'
            }}>SUBMIT</button>
        </form>
    )
}

export default MemberShipForm;