import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <div className="navbar">
            <section>
                <h1>Yang's Blog</h1>
                <div className="path">
                    <h2>
                        <Link to="/">Home</Link>
                    </h2>
                    |
                    <h2>
                        <Link to="/About">About</Link>
                    </h2>
                </div>
            </section>
        </div>
    ) 
    
}
