import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import PrivateRoute from './services/Athontication';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<PrivateRoute><Details /></PrivateRoute>} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
