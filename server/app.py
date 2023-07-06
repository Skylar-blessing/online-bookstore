from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS

from models import db, Author, Book, Category, Author_Category

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///online_bookstore.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)
 
db.init_app(app)

if __name__ == '__main__':
    app.run(port=5555, debug=True)