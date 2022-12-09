import styles from "./Reference.module.css"

function Reference (props) {
    let author = props.reference.author;
    let year = props.reference.year;
    let title = props.reference.title ?? "U.d.";
    let link = props.reference.link;

    return (
        <div>
            <p>
                <a className={styles.Reference} href={link}>{title}</a>
                <span className={styles.extra}>{author} {year}</span>
            </p>
        </div>);
}

export default Reference;