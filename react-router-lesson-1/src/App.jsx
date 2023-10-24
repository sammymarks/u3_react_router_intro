// import { useState } from 'react'

import './App.css'
import Header from './components/Header'
// import Home from './components/Home'
// import Nav from './components/Nav'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
import Main from './components/Main'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>
      <div className='App-main'>
        <Main />
      </div>
    </div>
  )
}

export default App
