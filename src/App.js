import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Promotion from './pages/Promotation';
import Membership from './pages/Membership';
import Erorr from './pages/404';
function App() {
  return (
    <div className="App">
      
     <Router>
       <Routes>
       <Route path="/" element={<>{<Home />} </>} />
       <Route path="/signup" element={<>{<SignUp />} </>} />
       <Route path="/login" element={<>{<Login />} </>} />
       <Route path="/about" element={<>{<About />} </>} />
       <Route path="/games" element={<>{<Games />} </>} />
       <Route path="/promotion" element={<>{<Promotion />} </>} />
       <Route path="/membership" element={<>{<Membership />} </>} />
       <Route path="/contact" element={<>{<Contact />} </>} />
       <Route path="/404" element={<>{<Erorr />} </>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;