import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ViewJobs from './pages/ViewJobs';
import PostJobs from './pages/PostJobs';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/viewjobs' element={<ViewJobs/>} />
          <Route path='/postjobs' element={<PostJobs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
