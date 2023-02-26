import './App.css'
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Router>
        <div className='noise'></div>
        <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
