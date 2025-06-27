import { Link } from 'react-router-dom'

export default function WordleStartScreen() {
    
  return (
    <div>
        <h1>WordleLookAlike</h1>
        <Link to="/board">Start</Link>
    </div>
  )
}
