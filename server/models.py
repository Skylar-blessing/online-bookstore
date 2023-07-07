from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db=SQLAlchemy(metadata=metadata)



class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'
    id= db.Column('id', db.Integer(), primary_key=True)
    name= db.Column('name', db.String())
    books= db.relationship('Book', backref='author')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
    @validates('name')
    def validate_name(self, key, value):
        if not isinstance(value, str):
            raise ValueError("Name must be a string.")
        return value

    def __repr__(self):
        return f"Author('{self.id}', '{self.name}')"
    
    

class Book(db.Model, SerializerMixin):
    __tablename__='books'
    id= db.Column(db.Integer(),primary_key= True )
    title= db.Column(db.String())
    cover= db.Column(db.String())
    description = db.Column(db.String())
    price = db.Column(db.Float())
    available_copies = db.Column(db.Integer())
    author_id = db.Column(db.Integer(), db.ForeignKey('authors.id'))
    category_id = db.Column(db.Integer(), db.ForeignKey('categories.id'))   
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'cover': self.cover,
            'description': self.description,
            'price': self.price,
            'available_copies': self.available_copies,
            'author_id' : self.author_id,
            'category_id' : self.category_id
        }

    @validates('available_copies')
    def validate_available_copies(self, key, value):
        if not isinstance(value, int):
            raise ValueError("Value must be an integer.")
        return value
    
    def __repr__(self):
        return f"Book('{self.title}')"
    
class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'
    id = db.Column(db.Integer(), primary_key=True)
    categoryName = db.Column(db.String())
    books = db.relationship('Book', backref='category')

    def to_dict(self):
        return {
            'id': self.id,
            'categoryName': self.categoryName
        }
    
    def __repr__(self):
        return f"Category('{self.id}', '{self.categoryName}')"

class Author_Category(db.Model, SerializerMixin):
    __tablename__ = 'authors_categories'
    id = db.Column(db.Integer(), primary_key=True)
    author_id = db.Column(db.Integer(),db.ForeignKey('authors.id'))
    category_id = db.Column(db.Integer(),db.ForeignKey('categories.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'category_id': self.category_id
            }
    
    def __repr__(self):
        return f"Author_Category('{self.author_id}', '{self.category_id}')"
    