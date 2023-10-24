import { Link } from "react-router-dom"

export default function Nav () {
    return (
      <div className="Nav">
        <h3> I am a Nav </h3>
        <Link to='/'>Home</Link>
        <Link to='/ComponentA'>Component A</Link>
        <Link to='/ComponentB'>Component B</Link>
      </div>
    )
} 
  