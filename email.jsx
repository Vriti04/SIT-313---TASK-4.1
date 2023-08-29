import React from 'react'
import './email.css'

function Email(){
    return(
    <div className="container">
    <h3 id="sub">SIGN UP FOR OUR DAILY INSIDER</h3>
    <form id="subscribe-form">
      <input className='email' type="email" name="email" placeholder="Enter your email"/>
      <button id="btn" type="submit">Subscribe</button>
    </form>
  </div>

    )
}

export default Email;