import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactuscomponent from './components/Contactuscomponent';
import Helpcomponent from './components/Helpcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';



function App() {
  return (
   <Router>
     <div className="App">

      <nav>
        <Link to="/first" className='navlinks'>First</Link>
        <Link to="/second" className='navlinks'>Second</Link>
        <Link to="/third" className='navlinks'>Third</Link>
        <Link to="/fourth" className='navlinks'>Fourth</Link>
        <Link to="/fifth" className='navlinks'>Fifth</Link>
        <Link to="/sixth" className='navlinks'>Sixth</Link>
        <Link to="/help" className='navlinks'>Help</Link>
        <Link to="/contactus" className='navlinks'>Contactus</Link>
        
      </nav>

      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is fun</h2>


      </header>
      {/* Below will render/display/show our component */}
      <Routes>
        <Route path="/first" element={<Firstcomponent />} />
        <Route path="/second" element={<Secondcomponent />} />
        <Route path="/third" element={<Thirdcomponent />} />
        <Route path="/fourth" element={<Fourthcomponent />} />
        <Route path="/fifth" element={<Fifthcomponent />} />
        <Route path="/sixth" element={<Sixthcomponent />} />
        <Route path="/help" element={<Helpcomponent />} />
        <Route path="/contactus" element={<Contactuscomponent />} />
        <Route path="*" element={<Notfound />} />
        
      </Routes>
      
    </div>
   </Router>
  );
}

export default App;

// jsx

// npm start => node package module
// npx => node package execute

// App.js is our root component
