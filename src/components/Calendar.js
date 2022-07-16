import styles from "./Calendar.module.css";

function isVacationDate(vacationDates, date) {
    let isVacation = false;
    vacationDates.forEach((vacationDate, index) => {
        if (date.toDateString() === vacationDate.toDateString()) {
            isVacation = true;
            return;
        };
    });
    return isVacation;
};

function nextVacationDate(vacationDates, today) {
    let nextVacationDate;
    if (today > new Date(Math.max.apply(null, vacationDates))) {
        return nextVacationDate;
    };
    
    vacationDates.forEach((iDate) => {
        if (nextVacationDate === undefined && iDate >= today) {
            nextVacationDate = iDate;
        };
        if (iDate >= today && nextVacationDate >= iDate) {
            nextVacationDate = iDate;
        };
    });
    return nextVacationDate;
} 

function Calendar(props) {
    let propDates = props.dates;
    let vacationDates = props.vacationDates;
    let today = new Date();
    today.setHours(0,0,0,0);
    let filteredDates = [];
    let daysFromStartToToday = 0;
    propDates.forEach(date => {
        if (date >= today) {
            filteredDates.push(date);
        } else {
            daysFromStartToToday += 1;
        }
    });
    let options = {year: 'numeric', month: 'long', day: 'numeric'};

    let amountOfDays;
    let maxDate = new Date(Math.max.apply(null, propDates));
    let minDate = new Date(Math.min.apply(null, propDates));

    let next = nextVacationDate(vacationDates, today);
    if (next === undefined) {
        amountOfDays = Math.floor((maxDate.getTime()-today.getTime()) / (1000*3600*24));
    } else if (today < minDate || today.toDateString() === next.toDateString()) {
        amountOfDays = 0;
    } else {
        amountOfDays = Math.floor((next.getTime()-today.getTime()) / (1000*3600*24));
    }

    return (
        <div>
            <p className={styles.message}>Dage til vi ses næste gang: </p>
            <p className={styles.bigMessage}>{amountOfDays}</p>
            {filteredDates.map((date, index) => {
                let dateElement;
                let note = "";
                
                let colorString = "";
                let light = (1-((index+daysFromStartToToday)/propDates.length)/2)*100;
                if (date.toDateString() === today.toDateString()) {
                    colorString = "#59f7ff";
                } else if (isVacationDate(vacationDates, date)) {
                    colorString = "#ff4a8f";
                    note += " ✈"
                } else {
                    colorString = "hsl(290, 100%, "+light+"%)"
                }

                let dayColor = {
                    backgroundColor: colorString,
                }

                if (date.getDate() === 20) {
                    note += " ♡";
                }
                
                dateElement = (
                    <div className={styles.div} style={dayColor}>
                        <p>
                            {date.toLocaleDateString('da-DK', options)}
                            {note}
                        </p>
                    </div>)
                    
                return dateElement;
            })}
        </div>
    )
}


export default Calendar;