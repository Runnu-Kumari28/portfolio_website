import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return(
    <div>
      <h1>My portfolio</h1>
      <nav>
          <Link to ="/">Home</Link> |
          <Link to ="/about">About</Link> |
          <Link to ="/projects">Projects</Link> |
          <Link to ="/contacts">Contact</Link> |
      </nav>
      <p>Welcome to my portfolio website</p>
    </div>
  )
} 

export default App;