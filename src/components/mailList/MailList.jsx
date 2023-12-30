import React from 'react'
import "./mailList.css"

function MailList() {
  return (
    <div className='mail'>
    <h1 className="mailTitle">Save time,Save money!</h1>
    <span className="mailDisc">Sign up and we'll send the best detail to you</span>
    <div className="mailInputContainer">
      <input type="text" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
    </div>
  )
}

export default MailList