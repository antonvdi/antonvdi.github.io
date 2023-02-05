from flask import Flask, jsonify, request, Response
from sqlalchemy import insert, select, create_engine
from flask_cors import CORS
from sqlalchemy.orm import Session
from datetime import datetime
from db_orm import *


con_string = r'postgres://wgfbtjwfmetpro:2470b2a0c663600817d271674ee82479080d552628b165ca4b1b36e9aa15cb42@ec2-34-252-216-149.eu-west-1.compute.amazonaws.com:5432/df2kchd9rhrqjl'
engine = create_engine(con_string)
session = Session(engine)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/get_articles', methods = ['GET'])
def get_articles():
    articles = session.query(Article).all()
    data = []
    for article in articles:
        passages = [passage.text for passage in article.passages]
        references = [{"author": reference.authors,
                "year": reference.year,
                "title": reference.title,
                "link": reference.link,
                "id": reference.id} for reference in article.references]
        data.append(
            {
                "id": article.id,
                "title": article.title,
                "author": article.author,
                "time": datetime.strftime(article.time, r"%Y-%m-%d"),
                "publisher": article.publisher,
                "link": article.link,
                "passages": passages,
                "references": references
            }
        )
    print(jsonify(data))
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
    return jsonify(id=passage.id, article_id = passage.article_id, text=passage.text)

@app.route('/get_passages/<article_id>', methods = ['GET'])
def get_passages(article_id):
    article = session.query(Article).get(article_id)
    data = []
    for passage in article.passages:
        data.append(
            {"id": passage.id,
            "text": passage.text}
        )
    return jsonify(data)

@app.route('/add_reference/<article_id>', methods = ['POST'])
def add_references(article_id):
    title = request.form.get('title')
    authors = request.form.get('authors')
    link = request.form.get('link')
    year = request.form.get('year')

    r = Reference(article_id = article_id,
        title = title,
        authors = authors,
        link = link,
        year = year
        )
    session.add(r)
    session.commit()
    return jsonify(id = r.id, article_id = r.article_id, title=r.title, authors=r.authors, link=r.link, year=r.year)

@app.route("/delete_reference/<id>", methods=["DELETE"])
def delete_reference(id):
    r = session.query(Reference).get(id)
    if not r:
        return Response("{}", status=400, mimetype='application/json')
    session.delete(r)
    session.commit()
    return jsonify(id = r.id, article_id = r.article_id, title=r.title, authors=r.authors, link=r.link, year=r.year)

@app.route('/get_references/<article_id>', methods = ['GET'])
def get_references(article_id):
    article = session.query(Article).get(article_id)
    data = [{"author": reference.authors,
                "year": reference.year,
                "title": reference.title,
                "link": reference.link,
                "id": reference.id} for reference in article.references]
    return jsonify(data)

# driver function
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)