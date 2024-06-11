import React from 'react'
import AnimationLogo from "../assets/images/logo-animated.gif";

function Loading() {
  return (
    <div className='loader'>
       <img className='logo' src={AnimationLogo} alt="apple-loader" />
    </div>
  )
}

export default Loading
