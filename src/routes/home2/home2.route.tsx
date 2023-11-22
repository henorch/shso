import { Link } from "react-router-dom"
import Header from "../../components/header/header.components"
import './home2.style.scss'

import { useState } from "react"

import { useMainContext } from '../../context/mainContext'
import Body from "../../body/body.components"

const MobileMenu = () => {
    const { closeMenu } = useMainContext()
    return (
        <div className="mainContainer">
            <span className="closeButton" onClick={
                closeMenu
            }>x CLOSE</span>
            <Link to="/" onClick={
                closeMenu
            }>Home</Link>
            <Link to="/about" onClick={
                closeMenu
            }>About us</Link>
            <Link to="/glance" onClick={
                closeMenu
            }>@ a Glance</Link>
            <Link to="/" onClick={
                closeMenu
            }>Upcomings</Link>
            <Link to="/" onClick={
                closeMenu
            }>Meetings & Minutes</Link>
            <Link to="/" onClick={
                closeMenu
            }>Job Offer</Link>
            <Link to="/" onClick={
                closeMenu
            }>Press & Release</Link>
            <Link to="/" onClick={
                closeMenu
            }>Donation & Grant</Link>

            <Link to="/membership" onClick={
                closeMenu
            } style={{
                background: "blue",
                color: "white",
                fontWeight: "bold"
            }}>Membership</Link>
        </div>
    )
}


const Home2 = () => {
    const { isOpen } = useMainContext()
    return (<div style={{
        maxWidth: "98%",
        margin: "0 auto"
    }}>
        <Header />
        {isOpen && <MobileMenu />}
        <Body />
    </div>)
}

export default Home2