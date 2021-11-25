import moment from 'moment';
import {useState, useEffect, useDebugValue} from 'react';
import 'moment/locale/pt-br';
import buildCalendar from './BuildCalendar';
import dayStyles from './dayStyles';
import Weekdays from './Weekdays';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Calendar = () => {
    moment.locale('pt-br');

    // criando um novo objeto de data para ser a referência
    const [today, setToday] = useState(moment());
    const [calendar, setCalendar] = useState([]);

    // mês e ano
    const currMonthName = () => {
        return today.clone().format('MMMM');
    }

    const currYear = () => {
        return today.clone().format('YYYY')
    }

    const prevMonth = () => {
        return today.clone().subtract(1, "month");
    }

    const nextMonth = () => {
        return today.clone().add(1, "month");
    }

    // renderizando o calendário
    useEffect(() => {
        setCalendar(buildCalendar(today))
    }, [today]);

    return ( 
        <main className="calendar-background">
            <header className="calendar-header">
                <h2 onClick={() => (setToday(prevMonth()))} className="chevron">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </h2>
                
                <h2>
                    <span>{currMonthName()}&nbsp;</span>
                    <span>{currYear()}</span>
                </h2>

                <h2 onClick={() => (setToday(nextMonth()))} className="chevron">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </h2>
            </header>
            <Weekdays today={today}/>

            <section className="dummy">
                {calendar.map((week) => {
                    return <div className="row">
                        {week.map((day) => {
                            return <div className={dayStyles(day, today)}
                            onClick={() => setToday(day)}>
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