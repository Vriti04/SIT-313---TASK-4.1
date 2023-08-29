import React from "react";
import './Footer.css';

const style = {
    fontWeight:"normal"
}

function Footer(){
    return(
        <div className="all">
            <div className="explore">
                <h2>Explore</h2>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Articles</li>
                    <li>Tutorials</li>
                </ul>
            </div>

            <div className="support">
                <h2>Support</h2>
                <ul>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>


            <div className="right">
                <h2>Stay Connected</h2>

            </div>
            
            <div className="center">
                <h1>DEV@Deakin 2022</h1>
            </div>

            <div className = "middle">
                <div>
                    <h3 style={style}>Privacy Policy</h3>
                </div>
                <div>
                    <h3 style={style}>Terms</h3>
                </div>
                <div>
                    <h3 style={style}>Code of Conduct</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;