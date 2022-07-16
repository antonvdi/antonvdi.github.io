import styles from "./Intro.module.css";

function Intro(props) {
    return (
        <div className={styles.CenterDiv}>
            <p className={styles.Header}>Anton Valdemar Dahlin Irvold</p>
            <a href="https://www.linkedin.com/in/anton-irvold-660371183/"><p>LinkedIn</p></a>
        </div>
    );
};
//            <img src="/images/Anton.Irvold150102_blur.png" alt="Anton Irvold" className={styles.Picture}/>

export default Intro;