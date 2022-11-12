from flask import Flask, jsonify, request
from sqlalchemy import  create_engine
from sqlalchemy import insert
from sqlalchemy.orm import sessionmaker
from datetime import datetime

con_string = r'mysql://antonvdi-db:(hvD<;Tx\_}fGjp9@34.141.6.61:3306/general'

engine = create_engine(con_string)

app = Flask(__name__)

@app.route('/get_articles', methods = ['GET'])
def home():
    if(request.method == 'GET'):
        data = {'data': "hello world"}
        return jsonify(data)

@app.route('/add_article', methods = ['POST'])
def home():
    if(request.method == 'POST'):
        author = request.form.get('author')

        stmt = insert(articles).values(title='Vi bliver nødt til at snakke om unges mentale sundhed',
            author='Anton Irvold',
            time=datetime(2020, 11, 19),
            publisher="Berlingske",
            link="https://www.berlingske.dk/laesere/det-er-slemt-nok-med-regneevnerne-men-hvor-mange-boern-i-4-klasse-kan-i"
            )
        session.execute(stmt)
        return jsonify(data)


# driver function
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)