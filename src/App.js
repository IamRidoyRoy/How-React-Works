// import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import Device from './components/Divice/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='HP' price='40,000'></Device>

      <Watch></Watch>
    </div>
  );
}

export default App;
