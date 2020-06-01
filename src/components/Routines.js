import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RoutinesContent from './RoutinesContent'

function Routines() {
    const url = 'https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines'
    const [ routines, addRoutine ] = useState({
        loading: true,
        data: null,
        error: false
    })

    useEffect(() => {
        axios.get(url)
            .then(response => {
                addRoutine({
                    loading:false,
                    data: response.data,
                    error: false
                })
            }).catch((error) => {
                addRoutine({
                    loading:false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let content = null

    if(routines.loading){
        content = 'Loading...'
    }

    if(routines.error){
        content = "Error occured, try to refresh your browser!"
    }

    if(routines.data){
        content = 
        <div>
            <div className="container">
                <RoutinesContent routines={routines.data} />
                
            </div>
        </div>
    }
    return (
        <div>
           {content} 
        </div>
    )
}

export default Routines
