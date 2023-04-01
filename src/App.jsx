import { useState } from 'react'
import './App.css'
import Content from './component/content/Content'
import Nav from './component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Content></Content>
    </div>
  )
}

export default App
