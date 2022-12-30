import React from 'react'
import './App.css'
import Title from './components/Title'
import Wrapper from './components/Wrapper/Wrapper'
import FriendCard from './components/FriendCard'
import imageOne from './images/image_one.png'
import imageTwo from './images/image_two.png'
import imageThree from './images/image_three.png'
import imageFour from './images/image_four.png'

import { images } from './images'

function App() {
  console.log('images', images)
  return (
    <div className="container">
      <div className="second_Wrapper">
        <Title />
        <Wrapper>
          <FriendCard
            image={imageOne}
            name="John"
            occupation="Front-End Engineer"
            location="DC"
          />
          <FriendCard
            image={imageTwo}
            name="Evan"
            occupation="Back-End Engineer"
            location="VA"
          />
          <FriendCard
            image={imageThree}
            name="Donell"
            occupation="Front-End Engineer"
            location="Portland"
          />
          <FriendCard
            image={imageFour}
            name="Helen"
            occupation="Front-End Engineer"
            location="Maryland"
          />
        </Wrapper>
      </div>
    </div>
  )
}

export default App
