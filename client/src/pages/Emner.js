import React, { useEffect, useState } from "react"
import Article from "../components/Article"



function Emner() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://app/get_articles';
        fetch(apiUrl)
          .then((response) => {
            console.log(response); 
            return response.json()})
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