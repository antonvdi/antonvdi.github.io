import styles from "./Article.module.css";
import Reference from "./Reference";
import React, { useState } from 'react';

function Article(props) {
    const [isShowing, setIsShowing] = useState(false);
    let header = props.article.title;
    let content = props.article.passages;
    let author = props.article.author;
    let time = props.article.time;
    let publisher = props.article.publisher;
    let link = props.article.link;
    let references = props.references;

    let publisherString;
    if (publisher !== null) {
        publisherString = (<div><a href={link}>Bragt i {publisher}</a></div>)
    }
    let options = {year: 'numeric', month: 'long', day: 'numeric'};  

    let referenceString;
    let contentString;
    let buttonMessage;

    if (isShowing) {
        contentString = content.map((paragraph, index) => {
            return (<p key={index}>{paragraph}</p>);
        });
        buttonMessage = "Skjul artikel";

        if (references !== null) {
            referenceString = references.map((reference, index) => {
                return (<Reference reference={reference} key={index}></Reference>)
            });
        } else {
            referenceString = <p></p>;
        }
    } else {
        contentString = <p></p>;
        referenceString = <p></p>;
        buttonMessage = "Vis artikel";
    }

    return (
        <article>
            <h1>{header}</h1>
            <address>Af {author}</address>
            Fra {time.toLocaleDateString('da-DK', options)}
            {publisherString}
            {contentString}
            {referenceString}
            <button className={styles.ShowArticle} onClick={() => setIsShowing(!isShowing)}>{buttonMessage}</button>
        </article>
    )
}

export default Article;