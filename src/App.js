import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/login' Component={Login}/>
          <Route exact path='/register' Component={Register}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
