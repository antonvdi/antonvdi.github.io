import React, { useEffect, useState } from "react"
import Article from "../components/Article"



function Emner() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:5000/get_articles';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {

            data.forEach(element => {
                element.time = new Date(element.time)
            });
            setArticles(data);
        });
    }, []);

    return (
        <div>
            {articles.map((article, index) => {
                if ("references" in article) {
                    return (<Article key={index} article={article} references={article.references}/>);
                } else {
                    return (<Article key={index} article={article} />)
                };
            })
            }
        </div>
    );
}

export default Emner;