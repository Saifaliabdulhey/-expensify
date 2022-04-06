import React from 'react'
import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            <h1>404! This page not found!</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage
