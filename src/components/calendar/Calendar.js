import moment from 'moment';
import {useState, useEffect} from 'react';
import 'moment/locale/pt-br';
import buildCalendar from './BuildCalendar';
import Weekdays from './Weekdays';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
            <section className="subtitle text-gray-dark-6">{monthName}</section>
            <hr/>
            <Weekdays today={today}/>
            <hr/>

            <section>
                {calendar.map((week) => {
                    return <div className="row justify-space-around">
                        {week.map((day) => {

                            return <div className={day.isBefore(today) ? "past" : "day"}>
                                <h1 className="day-title text-gray-dark-6">{day.format("D")}</h1>
                                <div className="day-body">
                                    {day.isBefore(today) ? "" :
                                        <button className="btn-add text-purple-light-6">
                                            <FontAwesomeIcon icon={faPlusCircle} />
                                        </button>}
                                </div>
                            </div>
                        })}
                    </div>
                })}
            </section>
        </main>
     );
}
 
export default Calendar;