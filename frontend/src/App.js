import {Routes,Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import TestLevel from './pages/testLevel/TestLevel';
import Articles from './pages/articles/Articles';
import OnlineSessions from './pages/onlineSessions/OnlineSessions';
import AiChat from './pages/aiChat/AiChat';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/testlvl" element={<TestLevel/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/onlinesessions" element={<OnlineSessions/>} />
          <Route path="/aichat" element={<AiChat/>} />
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
