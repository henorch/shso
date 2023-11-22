import { useState } from "react"



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

const MemberShipForm = () => {
    const [memberInfo, setMemberInfo] = useState<MemberInfoProps>();
    return (
        <div>
            <form>
                <h2>Personal Information</h2>
                <table>
                    <tr><td>Firstname:</td><td><input /></td></tr>
                    <tr><td>Lastname:</td><td><input /></td></tr>
                    <tr><td>Gender:</td><td><input /></td></tr>
                    <tr><td>Email:</td><td><input /></td></tr>
                    <tr><td>Telephone:</td><td><input /></td></tr>
                    <tr><td>Profession:</td><td><input /></td></tr>
                    <tr><td>Bio:</td><td><input type="comment" /></td></tr>
                </table>
            </form>
        </div>
    )
}

export default MemberShipForm;