import moment from 'moment';
import {useState, useEffect} from 'react';
import 'moment/locale/pt-br';
import buildCalendar from './BuildCalendar';
import Weekdays from './Weekdays';
import { Link } from 'react-router-dom';

const Calendar = () => {
    moment.locale('pt-br');

    // criando um novo objeto de data para ser a referência
    const [today, setToday] = useState(moment());
    const [calendar, setCalendar] = useState([]);

    // mês atual
    const monthName = today.clone().format('MMMM');


    useEffect(() => {
        setCalendar(buildCalendar(today))
    }, [today]);

    return ( 
        <main className="calendar-background">

            <h2 className="month-name">
                {monthName}
            </h2>

            <Weekdays today={today}/>

            <section className="dummy">
                {calendar.map((week) => {
                    return <div className="row">
                        {week.map((day) => {

                            return <div className={day.isBefore(today) ? "past" : "day"}>
                                <h1 className="day-title">{day.format("D")}</h1>
                            </div>
                        })}
                    </div>
                })}
            </section>
        </main>
     );
}
 
export default Calendar;