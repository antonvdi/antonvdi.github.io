import Calendar from "./Calendar"

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

let allDates = getDates(new Date(2022, 7, 8), new Date(2022, 10, 30))
let vacationDates = getDates(new Date(2022, 7, 19), new Date(2022, 7, 21)).concat(getDates(new Date(2022, 8, 23), new Date(2022, 9, 2)));

function Island() {
    return (
        <div>
            <Calendar dates={allDates} vacationDates={vacationDates}/>
        </div>
    )
}
export default Island;