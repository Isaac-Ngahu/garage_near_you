import './App.css';
import Login from './Login';
import Register from './Register';
import ReviewPost from './ReviewPost';
import Appointment from './Appointment';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import EditProfile from './EditProfile';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={Login}/>
          <Route exact path='/register' Component={Register}/>
          <Route exact path='/home' Component={Home}/>
          <Route exact path='/reviews' Component={ReviewPost} />
          <Route exact path='/appointments' Component={Appointment} />
          <Route exact path='/profile' Component={EditProfile}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
