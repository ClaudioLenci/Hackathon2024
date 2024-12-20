from flask import Blueprint, jsonify, request
import sys

from flask_cors import cross_origin
from models.model import Azienda
from hashing import check_password_hash

sector_bp = Blueprint('sector', __name__)

@sector_bp.route('/getallsectors', methods=['GET'])
@cross_origin()
def get_all_sectors():
    sectors = Azienda.query.with_entities(Azienda.Settore).distinct().all()

    sectors_data = []
    for sector in sectors:
        sectors_data.append(sector[0])

    return jsonify(sectors_data)
