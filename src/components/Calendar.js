import styles from "./Calendar.module.css";

function Calendar(props) {
    let propDates = props.dates;
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

    let vacationStart = new Date(2022, 8, 23);
    let vacationEnd = new Date(2022, 9, 2);
    let vacationStart2 = new Date(2022, 7, 19)
    let vacationEnd2 = new Date(2022, 7, 21)

    let amountOfDays;
    let maxDate = new Date(Math.max.apply(null, propDates));
    let minDate = new Date(Math.max.apply(null, propDates));
    
    if (today < minDate) {
        amountOfDays = 0;
    }else if (today < vacationStart2) {
        amountOfDays = (vacationStart2.getTime()-today.getTime()) / (1000*3600*24);
    } else if (today >= vacationStart2 && today <= vacationEnd2) {
        amountOfDays = 0;
    } else if (today < vacationStart) {
        amountOfDays = (vacationStart.getTime()-today.getTime()) / (1000*3600*24);
    } else if (today >= vacationStart && today <= vacationEnd) {
        amountOfDays = 0;
    } else if (today > vacationEnd && today <= maxDate) {
        amountOfDays = (maxDate.getTime()-today.getTime()) / (1000*3600*24);
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
                } else if (date >= vacationStart && date <= vacationEnd) {
                    colorString = "#ff4a8f";
                    note += " ✈"
                } else if (date >= vacationStart2 && date <= vacationEnd2) {
                    colorString = "#ff4a8f";
                    note += " ✈"
                }
                else {
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