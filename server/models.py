from flask_sqlalchemy import SQLAlchemy
# from uuid import uuid4
from datetime import datetime

db = SQLAlchemy()
# def get_uuid():
#     return uuid4().hex

# class user(db.Model):
#     __tablename__ ='user'
#     id = db.Column(db.String, primary_key=True,unique=True, default=get_uuid)
#     name = db.Column(db.String(200), nullable=False)
#     email=db.Column(db.String(345), nullable=False, unique=True)
#     password=db.Column(db.Text, nullable=False)


class User(db.Model):
    __tablename__ = 'users'
    
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    password = db.Column(db.Integer, nullable=False)
    confirm_password = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    recipes = db.relationship('UploadRecipe', backref='user', lazy=True)
    kitchens = db.relationship('Kitchen', backref='user', lazy=True)
    interactions = db.relationship('Interaction', backref='user', lazy=True)

class Kitchen(db.Model):
    __tablename__ = 'kitchens'
    
    kitchens_id = db.Column(db.Integer, primary_key=True)
    kitchen_names = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)

class UploadRecipe(db.Model):
    __tablename__ = 'upload_recipe'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.Text)  # Assuming image is stored as a URL or filepath use String else use Text to store base64 for local storage path
    description = db.Column(db.Text, nullable=False)
    steps = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer)
    country = db.Column(db.String)
    kitchen = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    recipe_list = db.relationship('RecipeList', backref='recipe', lazy=True)

class Interaction(db.Model):
    __tablename__ = 'interactions'
    
    id = db.Column(db.Integer, primary_key=True)
    favourite = db.Column(db.Integer, db.ForeignKey('recipe_list.id'))
    comment = db.Column(db.Text)
    ratings = db.Column(db.Float)
    share_count = db.Column(db.Integer, db.ForeignKey('recipe_list.id'))
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    recipe_list = db.relationship('RecipeList', backref='interaction', lazy=True)

class RecipeList(db.Model):
    __tablename__ = 'recipe_list'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    
    recipe_id = db.Column(db.Integer, db.ForeignKey('upload_recipe.id'))
    interactions = db.relationship('Interaction', backref='recipe_list', lazy=True)

