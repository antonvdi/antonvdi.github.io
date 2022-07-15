import Calendar from "./Calendar"

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

let allDates = getDates(new Date(2022, 7, 8), new Date(2022, 10, 31))

function Island() {
    return (
        <div>
            <Calendar dates={allDates}/>
        </div>
    )
}
export default Island;