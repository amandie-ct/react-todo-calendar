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
        <div className="bg-white pt-2 pb-2">
            <div className="subtitle text-gray-dark-6">{monthName}</div>
            <hr/>
            <Weekdays today={today}/>
            <hr/>

            {calendar.map((week) => {
                return <div className="row justify-space-around">
                    {week.map((day) => {

                    return <div className={ day.isBefore(today) ? "past" : "day"}>
                        <h1 className="day-title text-gray-dark-6">{day.format("D")}</h1>
                        <div className="day-body">
                            {day.isBefore(today) ? "" :
                                <button className="btn-add text-purple-light-6">
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </button>}
                        </div>
                    </div>
                })}
            </div>})}
        </div>
     );
}
 
export default Calendar;