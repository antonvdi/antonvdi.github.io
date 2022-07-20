import styles from "./Intro.module.css";
import {Link} from "react-router-dom";

function Intro(props) {
    return (
        <div className={styles.CenterDiv}>
            <h1 className={styles.Header}>Anton Valdemar Dahlin Irvold</h1>
            <a className={styles.LinkedIn} href="https://www.linkedin.com/in/anton-irvold-660371183/">LinkedIn </a>
            <Link to="/emner" className={styles.Emner}>Emner</Link>
            <Link to="/lande" className={styles.Emner}>Besøgte lande</Link>
        </div>
    );
};

export default Intro;