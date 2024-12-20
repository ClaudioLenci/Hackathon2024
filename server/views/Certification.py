from flask import Blueprint, jsonify, request
import sys

from flask_cors import cross_origin
sys.path.insert(1, 'models')
from models.model import Certificazione

certification_bp = Blueprint('certification', __name__)

@certification_bp.route('/getcertifications', methods=['GET'])
@cross_origin()
def get_certifications_list():
    certifications = Certificazione.query.all()

    certifications_data = []
    for certification in certifications:
        certification_dict = {
            'ID_Certification': certification.ID_Certificazione,
            'Name': certification.Nome,
            'Description': certification.Descrizione
        }
        certifications_data.append(certification_dict)

    return jsonify(certifications_data)


@certification_bp.route('/getcertification/<int:id>', methods=['GET'])
@cross_origin()
def get_certification(id):
    certification = Certificazione.query.get(id)

    if certification:
        certification_dict = {
            'ID_Certification': certification.ID_Certificazione,
            'Name': certification.Nome,
            'Description': certification.Descrizione
        }
        return jsonify(certification_dict)

    return jsonify({"message": "Certification not found"}), 404
