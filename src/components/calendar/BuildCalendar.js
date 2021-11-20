const buildCalendar = (today) => {

    // primeiro dia da primeira semana mostrada no calendário atual
    const firstWeekDay = today.clone().startOf('month').startOf('week');

    // último dia da última semana mostrada no calendário atual
    const lastWeekDay = today.clone().endOf('month').endOf('week');

    // dia anterior ao primeiro dia da primeira semana mostrada no calendário atual
    const dayBefore = firstWeekDay.clone().subtract(1, 'day');


    // inicializando
    const calendar = [];

    // enquanto o dia for anterior ao último dia mostrado no calendário
    // cria um array com 7 espaços preenchidos com 0
    // depois mapeia o array alterando os valores pra preencher com os dias de cada semana
    // usando o push adiciona as semanas no calendário
    while(dayBefore.isBefore(lastWeekDay, 'day')){
        calendar.push(
            Array(7)
            .fill(0)
            .map(() => {
                return dayBefore.add(1, 'day').clone();
            })
        )};

    
    return calendar;
}
 
export default buildCalendar;
