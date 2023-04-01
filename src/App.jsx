import { useState } from 'react'
import './App.css'
import Content from './component/content/Content'
import Nav from './component/Nav'
import Question from './component/question/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Content></Content>
      <Question></Question>
    </div>
  )
}

export default App
