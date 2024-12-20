from flask import Blueprint, jsonify, request
import sys

from flask_cors import cross_origin
from models.model import Azienda
from hashing import check_password_hash

company_bp = Blueprint('company', __name__)

@company_bp.route('/getcompanies', methods=['GET'])
@cross_origin()
def get_companies_list():
    companies = Azienda.query.all()

    companies_data = []
    for company in companies:
        company_dict = {
            'ID_Company': company.ID_Azienda,
            'Name': company.Nome,
            'Address': company.Indirizzo,
            'Phone': company.Telefono,
            'Email': company.Email,
            'City': company.Citta,
            'Sector': company.Settore
        }
        companies_data.append(company_dict)

    return jsonify(companies_data)


@company_bp.route('/getcompany/<int:id>', methods=['GET'])
@cross_origin()
def get_company(id):
    company = Azienda.query.get(id)

    if company:
        company_dict = {
            'ID_Company': company.ID_Azienda,
            'Name': company.Nome,
            'Address': company.Indirizzo,
            'Phone': company.Telefono,
            'Email': company.Email,
            'City': company.Citta,
            'Sector': company.Settore
        }
        return jsonify(company_dict)

    return jsonify({"message": "Company not found"}), 404

@company_bp.route('/logincompany', methods=['POST'])
@cross_origin()
def login_company():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    company = Azienda.query.filter_by(Email=email).first()

    if company and check_password_hash(company.PasswordHash, password):
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid email or password"}), 401
