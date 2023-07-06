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

api= Api(app)

class Index(Resource):
    def get(self):
        response_dict = {
            "message":"welcome back"
        }
        response = make_response(response_dict, 200)
        
        return response
    
api.add_resource(Index,"/")

class Authors(Resource):
    def get(self):
        author = Author.query.all()
        print(author)
        response= make_response(jsonify(author), 200)
        
        return response
    
api.add_resource(Authors, "/authors"
)



if __name__ == '__main__':
    app.run(port=5555, debug=True)