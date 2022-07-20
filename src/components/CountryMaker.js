import styles from "./CountryMaker.module.css";
import { useState } from "react";

const axios = require('axios').default;

function getAllCountries() {
    axios.get('https://restcountries.herokuapp.com/api/v1')
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
}

function getRandomCountry() {
    getAllCountries()
};

export default function CountryMaker() {
    const [countryPrompt, setCountryPrompt] = useState(getRandomCountry());

    return (<div className={styles.StartDiv}>
        <p>Lav et fiktivt land. Dit første land er:</p>
    </div>)
}