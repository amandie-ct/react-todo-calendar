import moment from 'moment';
import {useState, useEffect} from 'react';
import 'moment/locale/pt-br';
import buildCalendar from './CalendarFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Calendar = () => {
    moment.locale('pt-br');

    // criando um novo objeto de data para ser a referência
    const [today, setToday] = useState(moment());
    const [calendar, setCalendar] = useState([]);

    // mês atual
    const monthName = today.clone().format('MMMM');

    // lógica do calendário

    // nome dos dias da semana 
    let weekdays = [];
    for(let i = 0; i < 7; i++){
        weekdays.push(
            firstWeekDay.clone().add(i, 'day')
        );
    }

    useEffect(() => {
        setCalendar(buildCalendar())
    }, [today]);

    return ( 
        <div className="bg-white pt-2 pb-2">
            <div className="subtitle text-gray-dark-6">{monthName}</div>
            <hr/>
            <div className="row justify-space-around bg-gray-light-9">
                {weekdays.map((day) => {
                    return <div>
                        <div className="day-title p-1 text-gray-dark-6"
                        onClick={() => setToday(day)}>
                            <div>{day.format('dddd')}</div>
                    </div>
                        </div>})}
            </div>
            <hr/>

            {calendar.map((week) => {
                return <div className="row justify-space-around">
                    {week.map((day) => {
                        // dias do calendário
                        return <div className="day o-5 bg-white">
                            <h1 className="day-title text-gray-dark-6">{day.format("D")}</h1>
                            <div className="day-body">
                                <button className="btn-add text-purple-light-6">
                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                </button>
                            </div>
                        </div>
                    })}
                </div>})}
        </div>
     );
}
 
export default Calendar;