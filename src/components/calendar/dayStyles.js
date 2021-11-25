const dayStyles = (day, today) => {
    // estilos condicionais

    const isSelected = (day) => today.isSame(day, "day");
    const beforeToday = (day) => day.isBefore(new Date(), "day");
    const isToday = (day) => day.isSame(new Date(), "day");
    
    if (beforeToday(day)) return 'before';
    if (isToday(day)) return 'today';
    if (isSelected(day)) return 'selected';
    return 'day';
}
 
export default dayStyles;