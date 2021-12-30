import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hyy , I am Ritesh Kumar Thakur
        </p>
        <p>From BIT DURG </p>
        <p>
        <a
          className="App-link"
          href="https://github.com/RITESHKUMARTHAKUR/github-check"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link 
        </a> to my Github account
        </p>
      </header>
    </div>
  );
}

export default App;
