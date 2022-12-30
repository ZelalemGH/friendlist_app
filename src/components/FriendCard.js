import React from 'react'
import './Wrapper/FriendCard.css'

function FriendCard(props) {
  return (
    <div className="image_wrapper">
      {/* <div style={StyledFriendCard}> */}
      <div className="StyledFriendCard">
        {props.children}
        <img style={StyledImage} src={props.image} alt="one" />
        <div className="friend-description">
          <ul>
            <li>
              <b>Name</b>: {props.name}
            </li>
            <li>
              {/* the bold tag is intended to draw attention to the text without suggesting importance. */}
              <b>Occupation</b>: {props.occupation}
            </li>
            <li>
              {/* The <strong> tag is used to define text with strong importance. 
            The content inside is typically displayed in bold. */}
              <strong>Location</strong>: {props.location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const StyledImage = {
  width: '100%',
}
// const StyledFriendCard = {
//   backgroundColor: '#fff',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
//   width: '100%',
//   flexWrap: 'wrap',
// }

export default FriendCard
