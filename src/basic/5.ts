enum DayOfWeek {
    Monday, 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Surtuday,
    Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Surtuday || day === DayOfWeek.Sunday;
}