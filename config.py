import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://username:password@localhost/testdb')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
