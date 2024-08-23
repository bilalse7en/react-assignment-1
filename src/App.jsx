import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header />
      <UserProfile
        title="Muhammad Bilal"
        src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        desig="Mern Stack"

       />
    <UserProfile 
      title="Muhammad Bilal 123"
      src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      desig="Mern Stack 321"
      bgColor="bg-gray-300 hover:bg-gray-600 hover:text-white"
    />
    <UserProfile 
      title="123 Muhammad Bilal"
      src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      desig="321 Mern Stack"
    />
    <UserProfile
      title="567 Muhammad Bilal"
      src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      desig="789 Mern Stack"
      bgColor="bg-gray-300 hover:bg-gray-600 hover:text-white"
    />
    <Hero />
    <Footer />
    </>
  )
}

export default App
