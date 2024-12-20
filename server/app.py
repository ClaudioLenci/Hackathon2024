import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from views.School import school_bp
from views.Company import company_bp
from views.Skill import skill_bp
from views.Certification import certification_bp
from views.Person import person_bp
from views.Search import search_bp
from views.Sector import sector_bp
from models.model import db

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL').replace('mysql://', 'mysql+pymysql://')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(school_bp, url_prefix='/api/school')
app.register_blueprint(company_bp, url_prefix='/api/company')
app.register_blueprint(skill_bp, url_prefix='/api/skill')
app.register_blueprint(certification_bp, url_prefix='/api/certification')
app.register_blueprint(person_bp, url_prefix='/api/person')
app.register_blueprint(search_bp, url_prefix='/api/search')
app.register_blueprint(sector_bp, url_prefix='/api/sector')

if __name__ == "__main__":
    app.run()