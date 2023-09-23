import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Container from './Components/Container/Container'
import Questions from './Components/Questions/Questions'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Container></Container>
      <Questions></Questions>
    </div>
  )
}

export default App
