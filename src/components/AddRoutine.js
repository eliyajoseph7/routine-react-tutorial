import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function AddRoutine() {
    const url = 'https://5e98afff5eabe7001681c474.mockapi.io/api/v1/routines'
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        axios.post(url, data)
            .then(response => console.log(response.data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center p-3">
                    <div className="w-1/2">
                        <input 
                            className="border rouded w-full py-2 px-2"
                            type="text" 
                            name="activity"
                            placeholder="add routine"
                            ref={register({required:true})}
                        />
                        {errors.activity && <span className="text-red-500">This field is required</span>}
                    </div>
                    
                    <div className="w-1/4 flex justify-center">
                        <button type="submit" 
                                className="bg-transparent hover:bg-blue-500 
                                text-blue-700 font-semibold 
                                hover:text-white py-2 px-4 
                                border border-blue-500 hover:border-transparent rounded">
                            <FontAwesomeIcon icon={faPlus}
                                className="cursor-pointer"
                            />
                        </button>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddRoutine
