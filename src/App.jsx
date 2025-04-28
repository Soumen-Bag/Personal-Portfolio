import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/navBar'
import Home from './Components/Home/Home'
import Skill from './Components/Skills/Skill'
import ContactMe from './Components/ContactMe/ContactMe'
import SocialMedia from './Components/SocialMediaSection/SocialMedia'
import ProjectSection from './Components/ProjectSection/ProjectSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appMain'>
       <NavBar/>
       <Home/>
       <Skill/>
       <ProjectSection/>
       <ContactMe/>
    </div>
  )
}

export default App
