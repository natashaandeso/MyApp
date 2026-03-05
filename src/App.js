import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactuscomponent from './components/Contactuscomponent';
import Helpcomponent from './components/Helpcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning reactjs</h1>
        <h2>React is fun</h2>


      </header>
      {/* Below will render/display/show our component */}
      <Firstcomponent/>
      <Secondcomponent/>
      <Contactuscomponent/>
      <Helpcomponent/>
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
    </div>
  );
}

export default App;

// jsx

// npm start => node package module
// npx => node package execute

// App.js is our root component
