import LandingPage from './calendar/LandingPage';
import MainCalendar from './calendar/MainCalendar';
import Todos from './todo-list/Todos';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


const MainPage = () => {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/calendar" element={ <MainCalendar/> } />
                    <Route path="/todos" element={ <Todos/> } />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
 
export default MainPage;