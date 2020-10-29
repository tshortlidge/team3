from flask import Flask, Blueprint, jsonify, json, request, abort, session as flask_session
from flask_cors import CORS, cross_origin
import models

record_assessment_blueprint = Blueprint('api_record_assessment', __name__,)


@record_assessment_blueprint.route('/record_assessment', methods=['GET'])
@cross_origin()
def home():
    return jsonify("RECORD ASSESSMENT API")


@record_assessment_blueprint.route('/record_assessment', methods=['POST'])
@cross_origin()
def api_record_assessment_add():
    if not request.is_json:
        return jsonify({"msg": "not json format"})

    post_data = request.get_json()

    record_id = post_data["record_id"]
    physician_id = post_data["physician_id"]
    pat_id = post_data["pat_id"]
    assessment = post_data["assessment"]
    status = post_data["status"]
    completion_dt = post_data["completion_dt"]

    stmt = models.Record_Assessment.insert().\
        values(record_id=record_id, physician_id=physician_id, pat_id=pat_id, assesment=assessment, status=status,
               completion_dt=completion_dt)
    con = models.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Record Assessment registered."

