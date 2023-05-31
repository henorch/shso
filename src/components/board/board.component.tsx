import { useState } from "react"
import Trusteed from "./trustee.component"

const Trustees = [
    {
        id: 1,
        name: "Mr C.C Jude",
        status:"President",
        image:"../../Pres.png"
    },
    {
        id: 2,
        name: "Mrs B.M Olubukula",
        status:"Vice President",
        image:""
    },
    {
        id: 3,
        name: "Mrs O.E Oluwatoyin",
        status:"Secretary",
        image:""
    },
    {
        id: 4,
        name: "Mr Taye H.A",
        status:"Assistance Sec Gen",
        image:""
    },
    {
        id: 5,
        name: "Mr O. G Matthew",
        status:"Treasurer",
        image:""
    },
    {
        id: 6,
        name: "Mr A Stephen",
        status:"Financial Secretary",
        image:""
    },
    {
        id: 7,
        name: "Mrs F.G. Omolara",
        status:"Public Relation Officer 1",
        image:""
    },
    {
        id: 8,
        name: "Mrs A. Rasheeda",
        status:"Public Relation Officer 2",
        image:""
    },
    {
        id: 9,
        name: "Mrs A.A. Temitope",
        status:"Welfare/Social Secretary",
        image:""
    }
    
]


export type BoardProps = {
    id:number,
    name:string,
    status: string,
    image: string
}



const Board = () => {
   const [trustB, setTrustB] = useState<BoardProps[]>(Trustees)
    return(
        <div style={{
            display:"flex",
            overflow:"auto",
        }}>
        <Trusteed trustees={trustB}/>

        </div>
    )
}
export default Board;