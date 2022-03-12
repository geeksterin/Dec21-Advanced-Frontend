import React from 'react'

const Child = (props) => {
  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{props.formData.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{props.formData.lastName}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Child