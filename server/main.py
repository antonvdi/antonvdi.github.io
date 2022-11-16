from flask import Flask, jsonify, request, Response
from sqlalchemy import insert, select, create_engine
from sqlalchemy.orm import Session
from datetime import datetime
from db_orm import *

con_string = r'mysql://antonvdi-db:(hvD<;Tx\_}fGjp9@34.141.6.61:3306/general'
engine = create_engine(con_string)
session = Session(engine)


app = Flask(__name__)

@app.route('/get_articles', methods = ['GET'])
def get_articles():
    articles = session.query(Article).all()
    data = []
    for article in articles:
        passages = [passage.text for passage in article.passages]
        data.append(
            {
                "id": article.id,
                "title": article.title,
                "author": article.author,
                "time": article.time,
                "publisher": article.publisher,
                "link": article.link,
                "passages": passages,
            }
        )
    return jsonify(data)

@app.route('/add_article', methods = ['POST'])
def add_article():
    author = request.form.get('author')
    title = request.form.get('title')
    publisher = request.form.get('publisher')
    link = request.form.get('link')
    time = datetime.strptime(request.form.get('time'), r"%Y-%m-%d")

    a = Article(title = title,
        author = author,
        time = time,
        publisher = publisher,
        link = link
        )
    session.add(a)
    session.commit()
    return jsonify(a)

@app.route("/delete_article/<id>", methods=["DELETE"])
def delete_article(id):
    article = session.query(Article).get(id)
    if not article:
        return Response("{}", status=400, mimetype='application/json')
    session.delete(article)
    session.commit()
    return jsonify(article)

@app.route('/add_passage/<article_id>', methods = ['POST'])
def add_passage(article_id):
    text = request.form.get('text')
    p = Passage(article_id = article_id,
        text = text
        )
    session.add(p)
    session.commit()
    return jsonify(id = p.id, article_id = p.article_id, text=p.text)

@app.route("/delete_passage/<id>", methods=["DELETE"])
def delete_passage(id):
    passage = session.query(Passage).get(id)
    if not passage:
        return Response("{}", status=400, mimetype='application/json')
    session.delete(passage)
    session.commit()
    return jsonify(passage)

@app.route('/get_passages/<article_id>', methods = ['GET'])
def get_passages(article_id):
    article = session.query(Article).get(article_id)
    return jsonify(article.passages)

# driver function
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)