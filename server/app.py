from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
import traceback

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
        response = make_response(jsonify(response_dict), 200)
        
        return response
    
api.add_resource(Index,"/")

class Books(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return make_response(jsonify(books), 200)
    
    def post(self):
        new_book = Book(
            id = request.form['id'],
            title = request.form['title'],
            cover = request.form['cover'],
            description = request.form['description'],
            price = request.form['price'],
            available_copies = request.form['availabe_copies'],
            author_id = request.form['author_id'],
            category_id = request.form['category_id']
        )
        db.session.add(new_book)
        db.session.commit()

        response_dict = new_book.to_dict()
        response = make_response(response_dict, 201)

        return response

api.add_resource(Books, "/books")

class Book_by_Id(Resource):

    def get(self, id):
        response_dict = Book.query.filter_by(id=id).first().to_dict()
        response = make_response(response_dict, 200)
        
        return response
    
    def patch(self, id):
        updated_one = Book.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(updated_one, attr, request.form[attr])

        db.session.add(updated_one)
        db.session.commit()

        response_dict = updated_one.to_dict()
        response = make_response(response_dict, 200)

        return response
    
    def delete(self, id):
        selected_one = Book.query.filter_by(id=id).first()
        
        db.session.delete(selected_one)
        db.session.commit()

        response_dict = {"message": "Deleted successfully"}
        response = make_response(
            jsonify(response_dict),
            200
        )
        return response

api.add_resource(Book_by_Id, "/books/<int:id>")

class Categories(Resource):
    def get(self):
        categories = [category.to_dict() for category in Category.query.all()]
        return make_response(jsonify(categories), 200)
    def post(self):
        new_category = Category(
            id = request.form['id'],
            categoryName = request.form['categoryName']
        )
        db.session.add(new_category)
        db.session.commit()

        response_dict = new_category.to_dict()
        response = make_response(response_dict, 201)

        return response

api.add_resource(Categories, "/categories")

class Category_by_Id(Resource):

    def get(self, id):
        response_dict = Category.query.filter_by(id=id).first().to_dict()
        response = make_response(response_dict, 200)
        
        return response
    
    def patch(self, id):
        updated_one = Category.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(updated_one, attr, request.form[attr])

        db.session.add(updated_one)
        db.session.commit()

        response_dict = updated_one.to_dict()
        response = make_response(response_dict, 200)

        return response
    
    def delete(self, id):
        selected_one = Category.query.filter_by(id=id).first()
        
        db.session.delete(selected_one)
        db.session.commit()

        response_dict = {"message": "Deleted successfully"}
        response = make_response(
            jsonify(response_dict),
            200
        )
        return response

api.add_resource(Category_by_Id, "/categories/<int:id>")
    
class Authors(Resource):
    def get(self):
        authors = [author.to_dict() for author in Author.query.all()]
        return make_response(jsonify(authors), 200)
    def post(self):
        new_author = Author(
            id = request.form['id'],
            name = request.form['name']
        )
        db.session.add(new_author)
        db.session.commit()

        response_dict = new_author.to_dict()
        response = make_response(response_dict, 201)

        return response

api.add_resource(Authors, "/authors")

class Author_by_Id(Resource):

    def get(self, id):
        response_dict = Author.query.filter_by(id=id).first().to_dict()
        response = make_response(response_dict, 200)
        
        return response
    
    def patch(self, id):
        updated_one = Author.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(updated_one, attr, request.form[attr])

        db.session.add(updated_one)
        db.session.commit()

        response_dict = updated_one.to_dict()
        response = make_response(response_dict, 200)

        return response
    
    def delete(self, id):
        selected_one = Author.query.filter_by(id=id).first()
        
        db.session.delete(selected_one)
        db.session.commit()

        response_dict = {"message": "Deleted successfully"}
        response = make_response(
            jsonify(response_dict),
            200
        )
        return response

api.add_resource(Author_by_Id, "/authors/<int:id>")

class Author_categories(Resource):
    def get(self):
        author_categories = [author_category.to_dict() for author_category in Author_Category.query.all()]
        return make_response(jsonify(author_categories), 200)
    def post(self):
        new_author_category = Author_Category(
            id = request.form['id'],
            author_id = request.form['author_id'],
            category_id = request.form['category_id']
        )
        db.session.add(new_author_category)
        db.session.commit()

        response_dict = new_author_category.to_dict()
        response = make_response(response_dict, 201)

        return response

api.add_resource(Author_categories, "/author_categories")

class Author_categories_by_Id(Resource):

    def get(self, id):
        response_dict = Author_Category.query.filter_by(id=id).first().to_dict()
        response = make_response(response_dict, 200)
        
        return response
    
    def patch(self, id):
        updated_one = Author_Category.query.filter_by(id=id).first()
        for attr in request.form:
            setattr(updated_one, attr, request.form[attr])

        db.session.add(updated_one)
        db.session.commit()

        response_dict = updated_one.to_dict()
        response = make_response(response_dict, 200)

        return response
    
    def delete(self, id):
        selected_one = Author_Category.query.filter_by(id=id).first()
        
        db.session.delete(selected_one)
        db.session.commit()

        response_dict = {"message": "Deleted successfully"}
        response = make_response(
            jsonify(response_dict),
            200
        )
        return response

api.add_resource(Author_categories_by_Id, "/author_categories/<int:id>")

if __name__ == '__main__':
    app.run(port=5555, debug=True)