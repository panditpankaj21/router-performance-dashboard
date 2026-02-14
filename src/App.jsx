import { useState } from 'react'
import './App.css'
import RouterDashboard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterDashboard/>
    </>
  )
}

export default App
