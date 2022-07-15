import styles from "./Intro.module.css";

function Intro(props) {
    return (
        <div className={styles.Container}>
            <p className={styles.Header}>Anton Valdemar Dahlin Irvold</p>
            <img src="/images/Anton.Irvold150102_blur.png" alt="A picture of Anton Irvold" className={styles.Picture}/>
        </div>
    );
};

export default Intro;