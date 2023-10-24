import { Route, Routes } from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import Home from './Home'


const Main = () => {

  const username="FionaHippo"

  return (
    <div className="Main">
      <h2> I am Main </h2>
      <div className='routes-conainer'>
        <Routes >
          <Route path="/" element={<Home username={username}/>}/>
          <Route path="/ComponentA" element={<ComponentA/>}/>
          <Route path="/ComponentB" element={<ComponentB/>}/>
        </Routes>
      </div>
    </div>
  )
}
  
export default Main
  