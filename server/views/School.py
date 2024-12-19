from flask import Blueprint, jsonify, request
import sys
sys.path.insert(1, 'models')
from model import Scuola
from hashing import check_password_hash

school_bp = Blueprint('school', __name__)


@school_bp.route('/getschools', methods=['GET'])
def get_schools():
    schools = Scuola.query.all()

    schools_data = []
    for school in schools:
        school_dict = {
            'ID_School': school.ID_Scuola,
            'Name': school.Nome,
            'Address': school.Indirizzo,
            'Phone': school.Telefono,
            'Email': school.Email,
            'City': school.Citta
        }
        schools_data.append(school_dict)

    return jsonify(schools_data)


@school_bp.route('/getschool/<int:id>', methods=['GET'])
def get_school(id):
    school = Scuola.query.get(id)

    if school:
        school_dict = {
            'ID_School': school.ID_Scuola,
            'Name': school.Nome,
            'Address': school.Indirizzo,
            'Phone': school.Telefono,
            'Email': school.Email,
            'City': school.Citta
        }
        return jsonify(school_dict)

    return jsonify({"message": "School not found"}), 404


@school_bp.route('/loginschool', methods=['POST'])
def login_school():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    school = Scuola.query.filter_by(Email=email).first()

    if school and check_password_hash(school.PasswordHash, password):
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid email or password"}), 401
