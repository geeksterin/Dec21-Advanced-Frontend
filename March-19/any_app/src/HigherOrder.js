import React from 'react'

const HigherOrder = (props) => {
  return (
    <div style={{backgroundColor: "#0000FF"}}>
        {props.children}
    </div>
  )
}

export default HigherOrder