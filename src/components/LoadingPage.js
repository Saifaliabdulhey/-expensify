import React from 'react'
import loader from '../images/loader.gif'

function LoadingPage() {
  return (
    <div className="loader">
    <img className="loader__image" src={loader} />
    </div>
  )
}

export default LoadingPage