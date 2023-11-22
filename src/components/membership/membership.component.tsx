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
    const [memberInfo, setMemberInfo] = useState<MemberInfoProps>()
}