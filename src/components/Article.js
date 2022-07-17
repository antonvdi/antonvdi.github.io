import styles from "./Article.module.css";
import Reference from "./Reference";
import React, { useState } from 'react';

function Article(props) {
    const [isShowing, setIsShowing] = useState(false);
    let header = props.article.header;
    let content = props.article.content;
    let author = props.article.author;
    let time = props.article.time;
    let publisher = props.article.publisher;
    let link = props.article.link;
    let references = props.references;
    let publisherString;
    if (publisher !== undefined) {
        publisherString = (<div><a href={link}>Bragt i {publisher}</a></div>)
    }
    let options = {year: 'numeric', month: 'long', day: 'numeric'};  

    let referenceString;
    let contentString;
    let buttonMessage;

    if (isShowing) {
        contentString = content.map(paragraph => {
            return (<p>{paragraph}</p>);
        });
        buttonMessage = "Skjul artikel";

        if (references !== undefined) {
            referenceString = references.map(reference => {
                return (<Reference reference={reference}></Reference>)
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