import './dale/styles.css';
import MainPage from './components/calendar/MainPage';
import LandingPage from './components/calendar/LandingPage';
import Todos from './components/todo-list/Todos';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <LandingPage/> } />
        <Route path="/calendar" element={ <MainPage/> } />
        <Route path="/todos" element={ <Todos/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
