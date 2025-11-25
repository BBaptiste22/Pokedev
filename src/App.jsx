import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
