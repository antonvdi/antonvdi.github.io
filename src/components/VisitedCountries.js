import Map from "./Map";
import styles from "./VisitedCountries.module.css";

export default function VisitedCountries() {
    let visitedCountries = ["BEL", "CHE", "DEU", "DNK", "DOM", "EGY", "ESP",
    "FRA", "GBR", "GRC", "HTI", "ITA", "JAM", "MEX", "NLD", "NOR", "SWE", "THA",
    "TUR", "USA"];

    return (
        <div className={styles.map}>
            <div>
                <h1 className={styles.Header}>Alle lande jeg har besøgt:</h1>
            </div>
            <Map highlightedCountries={visitedCountries}></Map>
        </div>
    );
};