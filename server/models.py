from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db=SQLAlchemy(metadata=metadata)

class Author(db.Model, SerializerMixin):
    __tablename__ = 'authors'
    id= db.Column('id', db.Integer(), primary_key=True)
    name= db.Column('name', db.String())

    def __repr__(self):
        return f"Author('{self.id}', '{self.name}')"

class Book(db.Model, SerializerMixin):
    __tablename__='books'
    id= db.Column(db.Integer(),primary_key= True )
    title= db.Column(db.String())
    description = db.Column(db.String())
    available_copies = db.Column(db.Integer())
    
    def __repr__(self):
        return f"Book('{self.title}')"
    
class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'
    id = db.Column(db.Integer(), primary_key=True)
    categoryName = db.Column(db.String())
    
    def __repr__(self):
        return f"Category('{self.id}', '{self.categoryName}')"

class Author_Category(db.Model, SerializerMixin):
    __tablename__ = 'author_category'
    author_id = db.Column(db.Integer())
    category_id = db.Column(db.Integer())
    
    def __repr__(self):
        return f"Author_Category('{self.author_id}', '{self.category_id}')"
    