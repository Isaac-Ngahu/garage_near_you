import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={Login}/>
          <Route exact path='/register' Component={Register}/>
          <Route exact path='/home' Component={Home}/>
          <Route exact path='/reviews' Component={} />
          <Route exact path='/appointments' Component={}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
