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
   {trustees.map((trust, index) => <div
    
    key={index}
    style={{
        minWidth:"260px",
        position:"relative",
        borderRadius:10,
        height:"400px",
        background:`url(${trust.image})`,
        backgroundPosition:"center",
        border:"1px solid black",
        margin:"5px",
        zIndex:-1,
   }}>
<div style={{
    background:"white",
    position:'absolute',
    bottom:0,
    textAlign:"center",
    opacity:0.5,
    width:"100%"
}}>
    <b>{trust.name}</b>
   <p>{trust.status}</p>
   </div>
   </div>)}</>
}
export default Trusteed