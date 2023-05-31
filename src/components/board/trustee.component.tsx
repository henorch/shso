import { AiOutlineAim, AiOutlineArrowRight } from "react-icons/ai"
import { BoardProps } from "./board.component"
import React, { FC } from "react"

type TrusteeProps = {
    trustees: BoardProps[]
}

const NextButton = () => {
    return(
        <div style={{
            position:"absolute",
            zIndex:1,
            background:"white",
            padding:"10px",
            top:1000,
            opacity:0.5,
            borderRadius:"50%",
            marginRight: "20px",
            right:10,
        }}>
           <AiOutlineArrowRight/>
        </div>
    )
}


const Trusteed = ({trustees}: TrusteeProps) : JSX.Element => {
   return <>
        <NextButton/>
   {trustees.map(trust => <div style={{
        minWidth:"200px",
        position:"relative",
        height:"250px",
        background:"green",
        margin:"5px",
        zIndex:-1,
        padding:"5px"
   }}><b>{trust.name}</b>
   <p>{trust.status}</p></div>)}</>
}
export default Trusteed