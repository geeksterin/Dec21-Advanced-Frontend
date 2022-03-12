import React, { useRef, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const ip1_ref = useRef(null);
    const ip2_ref = useRef(null);
    const [formData, updateFormData] = useState({});

    const submitForm = () => {
        updateFormData({
            'firstName': ip1_ref.current.value,
            'lastName': ip2_ref.current.value,  
        })
    }

    return (
            <>
                <h2>Form</h2>
                <input ref={ip1_ref} type="text" placeholder='Enter first name' />
                <input ref={ip2_ref} type="text" placeholder='Enter last name' />
                <button onClick={submitForm}>Submit form</button>
                <br />
                <br />
                <br />
                <Child formData={formData} />
            </>
    )
}

export default Parent