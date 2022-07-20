import {Link} from "react-router-dom";
import styles from "./PlaygroundPage.module.css";

export default function PlaygroundPage() {
    return (
        <div className={styles.CenterBox}>
            <Link to="/lande">
                <div className={styles.PaperCard}>
                    Besøgte lande
                </div>
            </Link>
            <Link to="/landeleg">
                <div className={styles.PaperCard2}>
                    Lav et land
                </div>
            </Link>
        </div>
    )
}