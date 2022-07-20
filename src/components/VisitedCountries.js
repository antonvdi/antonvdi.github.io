import { useState } from "react";
import Map from "./Map";
import styles from "./VisitedCountries.module.css";

export default function VisitedCountries() {
    const [countries, setCountries] = useState(0);

    return (
        <div className={styles.map}>
            <div>
                <h1 className={styles.Header}>Jeg har besøgt {countries} lande</h1>
            </div>
            <Map setCountries={setCountries}></Map>
        </div>
    );
};