from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from sqlalchemy.orm import joinedload
import sys
from models.model import Competenza, PersonaCompetenza, Azienda, Persona

search_bp = Blueprint('search', __name__)

@search_bp.route('/search_students_by_skill/<string:skill_name>', methods=['GET'])
@cross_origin()
def search_students_by_skill(skill_name):
    if not skill_name:
        return jsonify({"message": "The skill name is required"}), 400

    skill = Competenza.query.filter_by(Nome=skill_name).first()
    
    if not skill:
        return jsonify({"message": "Skill not found"}), 404

    associations = (
        PersonaCompetenza.query
        .filter_by(ID_Competenza=skill.ID_Competenza)
        .options(joinedload(PersonaCompetenza.persona))
        .all()
    )

    if not associations:
        return jsonify({"message": "No students found with this skill"}), 404

    students = [
        {
            "ID_Person": association.persona.ID_Persona,
            "FirstName": association.persona.Nome,
            "LastName": association.persona.Cognome,
            "Email": association.persona.Email
        }
        for association in associations
    ]

    return jsonify(students), 200


@search_bp.route('/search_companies_by_sector/<string:sector_name>', methods=['GET'])
@cross_origin()
def search_companies_by_sector(sector_name):
    if not sector_name:
        return jsonify({"message": "The sector name is required"}), 400

    companies = (
        Azienda.query
        .filter_by(Settore=sector_name)
        .all()
    )

    if not companies:
        return jsonify({"message": f"No companies found for the sector '{sector_name}'"}), 404

    companies_data = [
        {
            "ID_Company": company.ID_Azienda,
            "Name": company.Nome,
            "Address": company.Indirizzo,
            "City": company.Citta,
            "Phone": company.Telefono,
            "Email": company.Email,
            "Sector": company.Settore
        }
        for company in companies
    ]

    return jsonify(companies_data), 200
