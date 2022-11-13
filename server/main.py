from flask import Flask, jsonify, request
from sqlalchemy import  create_engine
from sqlalchemy import insert
from sqlalchemy.orm import Session
from datetime import datetime
from db_orm import *

con_string = r'mysql://antonvdi-db:(hvD<;Tx\_}fGjp9@34.141.6.61:3306/general'
engine = create_engine(con_string)
session = Session(engine)


app = Flask(__name__)

@app.route('/get_articles', methods = ['GET'])
def get_articles():
    if(request.method == 'GET'):
        articles = session.query(Article).all()
        data = []
        for article in articles:
            data.append(
                {
                    "title": article.title,
                    "author": article.author,
                    "time": article.time,
                    "publisher": article.publisher,
                    "link": article.link,
                }
            )
        return jsonify(data)

@app.route('/add_article', methods = ['POST'])
def add_article():
    if(request.method == 'POST'):
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


# driver function
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)