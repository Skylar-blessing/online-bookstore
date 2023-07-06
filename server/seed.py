#!/usr/bin/env python3
import random
from app import app 
from models import db, Author, Book, Category, Author_Category
from faker import Faker

with app.app_context():
    db.drop_all()
    db.create_all()
    fake = Faker()
    
    def categ():
        valid_categ = ['Adventure', 'Romance', 'SciFi', 'Biography']
        return fake.random_element(valid_categ)
    
    authors = []
    for i in range(50):
        author = Author(
            name = fake.name()  
        )
        authors.append(author)

    db.session.add_all(authors)
    db.session.commit()  
        
    categories = []
    for i in range(50):
        category = Category(
            categoryName=categ()  
        )
        categories.append(category)

    db.session.add_all(categories)
    db.session.commit()
    
    books = []
    for i in range(50):
        book = Book(
            title=fake.sentence(),
            description=fake.paragraph(),
            available_copies=random.randint(0, 100),
            author_id=author.id,
            category_id=category.id
        )
        books.append(book)

    db.session.add_all(books)
    db.session.commit()
    
    authors_categories = []
    for i in range(50):
        author_category = Author_Category(
            author_id=random.randint(1,50),
            category_id=random.randint(1,50) 
        )
        authors_categories.append(author_category)

    db.session.add_all(authors_categories)
    db.session.commit()
    
   
    
    
