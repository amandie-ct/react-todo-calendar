import './dale/styles.css';
import MainPage from './components/calendar/MainPage';
import LandingPage from './components/calendar/LandingPage';
// import {Routes, Route, Router} from 'react-router';


function App() {

  return (
    <div className="App">
      <MainPage/>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/calendar" element={<MainPage/>} />
        </Routes>
      </Router> */}



    </div>
  );
}

export default App;
