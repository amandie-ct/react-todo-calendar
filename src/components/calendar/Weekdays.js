const Weekdays = ({today}) => {

// definindo o primeiro dia da semana
const firstDay = today.clone().startOf('month').startOf('week');

// nome dos dias da semana 
let weekdays = [];

for(let i = 0; i < 7; i++){
    weekdays.push(
        firstDay.clone().add(i, 'day')
    )}

    return (
        <div className="week">
            {weekdays.map((day) => {
                return <div className="day-of-week"> {day.format('ddd')} </div>})
        }
        </div>
    );
}
 
export default Weekdays;

