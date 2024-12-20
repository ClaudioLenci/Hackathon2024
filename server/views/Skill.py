from flask import Blueprint, jsonify, request
import sys

from flask_cors import cross_origin
from models.model import Competenza

skill_bp = Blueprint('skill', __name__)

@skill_bp.route('/getskills', methods=['GET'])
@cross_origin()
def get_skills_list():
    skills = Competenza.query.all()

    skills_data = []
    for skill in skills:
        skill_dict = {
            'ID_Skill': skill.ID_Competenza,
            'Name': skill.Nome,
            'Description': skill.Descrizione
        }
        skills_data.append(skill_dict)

    return jsonify(skills_data)


@skill_bp.route('/getskill/<int:id>', methods=['GET'])
@cross_origin()
def get_skill(id):
    skill = Competenza.query.get(id)

    if skill:
        skill_dict = {
            'ID_Skill': skill.ID_Competenza,
            'Name': skill.Nome,
            'Description': skill.Descrizione
        }
        return jsonify(skill_dict)

    return jsonify({"message": "Skill not found"}), 404
