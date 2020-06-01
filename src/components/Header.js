import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div>
            <div className="flex justify-between border-b p-3 font-bold">
                <h1>My Daily Routine</h1>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default Header
