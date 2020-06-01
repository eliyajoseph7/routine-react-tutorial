import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function RoutinesContent(props) {
    const url = `https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines/`
    const data = [].concat(props.routines)
    .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)

    const onDelete = (id) => {
        axios.delete(url+id)
            .then(response => {
                console.log(response)
            })
    }
    return (
        <div>
            
            {
                    data.map((routine) => 
                        <div key={routine.id}
                            className="flex justify-center flex-wrap w-full"
                        >
                            <p className="flex justify-between bg-green-500 p-3 text-white rounded my-3 mx-auto w-3/4">
                                {routine.activity}
                                <FontAwesomeIcon 
                                    icon={faTrashAlt}
                                    className="cursor-pointer"
                                    onClick={() => onDelete(routine.id)}
                                />    
                            </p>
                        </div>
                    )
                }
        </div>
    )
}

export default RoutinesContent
