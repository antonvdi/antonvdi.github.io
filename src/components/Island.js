import Calendar from "./Calendar"
import React, { useState } from 'react';
import styles from "./Island.module.css";

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
    const [isAuthorized, setAuthorized] = useState(false);

    const handleAuthorization = (pin) => {
        if(pin === "2011") {
            setAuthorized(true);
        } else {
            setAuthorized(false);
        }
    }

    return (
        <div>
            {(() => {
            if(!isAuthorized) {
                return (
                <form className={styles.Form}>
                    <label className={styles.Label}>Kode</label><br />
                    <input className={styles.Input} autofocus type="text" onChange={(e) => handleAuthorization(e.target.value)}  />
                </form>
                )
            } else {
                return (<Calendar dates={allDates} vacationDates={vacationDates}/>)
            }})()}
            
        </div>
    )
}
export default Island;