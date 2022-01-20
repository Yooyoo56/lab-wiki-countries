import logo from './logo.svg';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList></CountriesList>
    </div>
  );
}

export default App;
