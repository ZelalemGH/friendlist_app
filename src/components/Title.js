import React from 'react'
import './Wrapper/Title.css'

function Title(props) {
  // return <h2 style={StyledTitle}>Friends List</h2>
  return (
    <div className="StyledTitle">
      <h2>Friends List</h2>
      {props.children}
    </div>
  )
}

const StyledTitle = {
  backgroundColor: 'lightgray',
  textAlign: 'center',
  color: 'blue',
  textDecoration: 'underline',
  fontFamily: 'Arial',
  fontSize: '30px',
  border: '2px solid green',
  borderWidth: '1mm',
  margin: '5px',
  padding: '30px',
}
export default Title
