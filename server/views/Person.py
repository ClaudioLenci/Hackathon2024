from flask import Blueprint, jsonify, request
import sys
sys.path.insert(1, 'models')
from model import db, Persona, Certificazione, Competenza, PersonaCompetenza, PersonaCertificazione
from hashing import *

person_bp = Blueprint('person', __name__)

@person_bp.route('/getpeople', methods=['GET'])
def get_people_list():
    people = Persona.query.all()

    people_data = []
    for person in people:
        person_dict = {
            'ID_Person': person.ID_Persona,
            'FirstName': person.Nome,
            'LastName': person.Cognome,
            'DateOfBirth': person.DataDiNascita,
            'Address': person.Indirizzo,
            'Phone': person.Telefono,
            'Email': person.Email,
            'IsExStudent': person.IsExStudente,
            'GraduationYear': person.AnnoDiploma,
        }
        people_data.append(person_dict)

    return jsonify(people_data)

@person_bp.route('/getperson/<int:id>', methods=['GET'])
def get_person(id):
    person = Persona.query.get(id)

    person_id = {
        'ID_Person': person.ID_Persona,
        'FirstName': person.Nome,
        'LastName': person.Cognome,
        'DateOfBirth': person.DataDiNascita,
        'Address': person.Indirizzo,
        'Phone': person.Telefono,
        'Email': person.Email,
        'IsExStudent': person.IsExStudente,
        'GraduationYear': person.AnnoDiploma,
    }

    if person:
        return jsonify(person_id)
    return jsonify({"message": "Person not found"}), 404

@person_bp.route('/registerperson', methods=['POST'])
def create_person():
    data = request.get_json()

    first_name = data.get('name')
    last_name = data.get('surname')
    date_of_birth = data.get('date_of_birth')
    address = data.get('address')
    phone = data.get('phone')
    email = data.get('email')
    password = data.get('password')
    is_ex_student = data.get('is_ex_student')
    graduation_year = data.get('graduation_year')
    school_id = data.get('school_id')
    
    if not first_name or not last_name or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400
    
    new_person = Persona(
        Nome=first_name,
        Cognome=last_name,
        DataDiNascita=date_of_birth,
        Indirizzo=address,
        Telefono=phone,
        Email=email,
        PasswordHash=Sha512Hash(password),
        IsExStudente=is_ex_student,
        AnnoDiploma=graduation_year,
        ID_Scuola=school_id,
    )

    db.session.add(new_person)
    db.session.commit()

    return jsonify({"message": "Person created"}), 201


@person_bp.route('/loginperson', methods=['POST'])
def login_person():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    person = Persona.query.filter_by(Email=email).first()

    if person and check_password_hash(person.PasswordHash, password):
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Incorrect email or password"}), 401


@person_bp.route('/addskill', methods=['POST'])
def add_skill_to_person():
    data = request.get_json()

    person_id = data.get('person_id')
    skill_id = data.get('skill_id')

    if not person_id or not skill_id:
        return jsonify({"message": "Person ID and skill ID are required"}), 400

    person = Persona.query.get(person_id)
    if not person:
        return jsonify({"message": "Person not found"}), 404

    skill = Competenza.query.get(skill_id)
    if not skill:
        return jsonify({"message": "Skill not found"}), 401
    
    person_skill = PersonaCompetenza(ID_Persona=person_id, ID_Competenza=skill_id)
    db.session.add(person_skill)
    db.session.commit()

    return jsonify({"message": "Skill added successfully"}), 200


@person_bp.route('/addcertificate', methods=['POST'])
def add_certificate_to_person():
    data = request.get_json()

    person_id = data.get('person_id')
    certificate_id = data.get('certificate_id')
    issue_date = data.get('issue_date')
    expiration_date = data.get('expiration_date')
    certificate_number = data.get('certificate_number')
    status = data.get('status')

    if not person_id or not certificate_id or not issue_date or not status:
        return jsonify({"message": "Person ID, certificate ID, issue date, and status are required"}), 400

    person = Persona.query.get(person_id)
    if not person:
        return jsonify({"message": "Person not found"}), 404

    certificate = Certificazione.query.get(certificate_id)
    if not certificate:
        return jsonify({"message": "Certificate not found"}), 401

    person_certificate = PersonaCertificazione(
        ID_Persona=person_id,
        ID_Certificazione=certificate_id,
        Data_Rilascio=issue_date,
        Data_Scadenza=expiration_date,
        Numero_Certificato=certificate_number,
        Stato=status
    )
    db.session.add(person_certificate)
    db.session.commit()

    return jsonify({"message": "Certificate added successfully"}), 200


@person_bp.route('/removeskill', methods=['DELETE'])
def remove_skill_from_person():
    data = request.get_json()

    person_id = data.get('person_id')
    skill_id = data.get('skill_id')

    if not person_id or not skill_id:
        return jsonify({"message": "Person ID and skill ID are required"}), 400

    person = Persona.query.get(person_id)
    if not person:
        return jsonify({"message": "Person not found"}), 404

    skill = Competenza.query.get(skill_id)
    if not skill:
        return jsonify({"message": "Skill not found"}), 401

    person_skill = PersonaCompetenza.query.filter_by(ID_Persona=person_id, ID_Competenza=skill_id).first()
    if not person_skill:
        return jsonify({"message": "Skill not associated with this person"}), 404

    db.session.delete(person_skill)
    db.session.commit()

    return jsonify({"message": "Skill removed successfully"}), 200


@person_bp.route('/removecertificate', methods=['DELETE'])
def remove_certificate_from_person():
    data = request.get_json()

    person_id = data.get('person_id')
    certificate_id = data.get('certificate_id')

    if not person_id or not certificate_id:
        return jsonify({"message": "Person ID and certificate ID are required"}), 400

    person = Persona.query.get(person_id)
    if not person:
        return jsonify({"message": "Person not found"}), 404

    certificate = Certificazione.query.get(certificate_id)
    if not certificate:
        return jsonify({"message": "Certificate not found"}), 401

    person_certificate = PersonaCertificazione.query.filter_by(ID_Persona=person_id, ID_Certificazione=certificate_id).first()
    if not person_certificate:
        return jsonify({"message": "Certificate not associated with this person"}), 404

    db.session.delete(person_certificate)
    db.session.commit()

    return jsonify({"message": "Certificate removed successfully"}), 200
