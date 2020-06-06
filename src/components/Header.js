import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavMenu from './NavMenu'

function Header() {
    const [show, setShow] = useState(false)
    const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: 'translateX(-100)' },
    enter: { opacity: 1, taransform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(-100)' },
    })

    const unMaskTransitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    return (
        <div>
            <span className="flex justify-between border-b p-3 font-bold">
                <h1>My Daily Routine</h1>
                <FontAwesomeIcon 
                    icon={faBars}
                    className='cursor-pointer'
                    onClick={() => setShow(!show)}
                />
            </span>
            {transitions.map(({ item, key, props }) =>
            item && 
            <animated.div 
                key={key} 
                style={props}
                className="bg-t fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setShow(false)}
                >
                
            </animated.div>
            )}

            {unMaskTransitions.map(({ item, key, props }) =>
            item && 
            <animated.div 
                key={key} 
                style={props}
                className="w-4/5 bg-white fixed top-0 right-0 bottom-0 shadow h-full z-50"
                >
                <div>
                    <NavMenu closeMenu={() => setShow(false)}/>
                </div>        
            </animated.div>
            )}
        </div>
    )
}

export default Header
