import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';

function App() {
  

  return (
    <>
    <Button variant="primary">Primary</Button>
    <FontAwesomeIcon icon={faInstagram} /><h1>BookStore</h1>
    </>
  )
}

export default App
