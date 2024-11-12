

from flask import Flask, request, jsonify,session
from flask_cors import CORS
from models import User as UserModel, db  # Renaming 'user' to 'UserModel' to avoid conflicts
import os
import redis
from flask_bcrypt import Bcrypt
from flask_session import Session

app = Flask(__name__)

# Flask app configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'thisissecret'
app.config['SQLALCHEMY_ECHO'] = True

# Session configuration

app.config['SESSION_TYPE'] = 'redis'  
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_REDIS'] = redis.from_url("redis://127.0.0.1:6379/0")


# Initialize Bcrypt and Session
bcrypt = Bcrypt(app)
server_session = Session(app)

# Initialize SQLAlchemy
db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

# Enable CORS
CORS(app)

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({'user unauthorized'}),401
    user = UserModel.query.filter_by(id=user_id).first()
    return jsonify({
        "name": user.name,
        "email": user.email
       
    })








# @app.route('/register', methods=['POST'])
# def add_user():
#     name = request.json['name']
#     email = request.json['email']
#     password = request.json['password']
#     user_exists = UserModel.query.filter_by(email=email).first() is not None
#     if user_exists:
#         return 'User already exists'
#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
#     new_user = UserModel(name=name, email=email, password=hashed_password)
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify({
#         "name": new_user.name,
#         "email": new_user.email,
#         "password": new_user.password
#     })

@app.route('/register', methods=['POST'])
def add_user():
    try:
        name = request.json.get('name')
        email = request.json.get('email')
        password = request.json.get('password')

        # Check if the user already exists
        if UserModel.query.filter_by(email=email).first():
            return jsonify({'error': 'User already exists'}), 400

        # Hash password and create new user
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = UserModel(name=name, email=email, password=hashed_password)
        
        # Add user to the database
        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            'name': new_user.name,
            'email': new_user.email
        }), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# @app.route('/login', methods=['POST'])
# def login_user():
#     email = request.json['email']
#     password = request.json['password']
#     user_instance = UserModel.query.filter_by(email=email).first()  # Renamed to 'user_instance' to avoid conflict
#     if user_instance is None:
#         return jsonify({'error': 'User unauthorized'}), 404
#     if not bcrypt.check_password_hash(user_instance.password, password):
#         return jsonify({'error': 'Password is wrong'}), 401
#     session['user_id'] = user_instance.id
#     return jsonify({
#         "name": user_instance.name,
#         "email": user_instance.email,
#         "password": user_instance.password
#     })

# @app.route('/login', methods=['POST'])
# def login_user():
#     try:
#         email = request.json.get('email')
#         password = request.json.get('password')

#         user_instance = UserModel.query.filter_by(email=email).first()

#         if not user_instance:
#             return jsonify({'error': 'User unauthorized'}), 404

#         if not bcrypt.check_password_hash(user_instance.password, password):
#             return jsonify({'error': 'Incorrect password'}), 401

#         # Set user_id in session
#         session['user_id'] = user_instance.id

#         return jsonify({
#             'name': user_instance.name,
#             'email': user_instance.email
#         }), 200

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

@app.route('/login', methods=['POST'])
def login_user():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        # Find the user by email
        user_instance = UserModel.query.filter_by(email=email).first()

        if not user_instance:
            return jsonify({'error': 'User not found'}), 404

        # Check if the password is correct
        if not bcrypt.check_password_hash(user_instance.password, password):
            return jsonify({'error': 'Incorrect password'}), 401

        # Set user_id in session
        session['user_id'] = user_instance.id

        return jsonify({
            'message': 'Login successful',
            'name': user_instance.name,
            'email': user_instance.email
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/logout', methods=['POST'])
def logout_user():
    session.pop('user_id', None)
    return jsonify({'message': 'Logged out successfully'}), 200



if __name__ == '__main__':
    app.run(debug=True)
