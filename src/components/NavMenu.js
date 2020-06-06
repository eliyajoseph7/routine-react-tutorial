import React from 'react'
import { Link } from 'react-router-dom'

function NavMenu(props) {
    return (
        <div>
            <header className="text-center font-bold border-b p-3">
                <h1>My Routine</h1>
            </header>
            <Link to="/"
                onClick={props.closeMenu}
                className="p-3 block border-b text-blue-500 hover:text-blue-800"
            >
                Home
            </Link>
            <Link to="/about"
                onClick={props.closeMenu}
                className="block border-b p-3 text-blue-500 hover:text-blue-800"
            >
                About
            </Link>
        </div>
    )
}

export default NavMenu
