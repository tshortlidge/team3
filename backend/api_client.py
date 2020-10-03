from flask import Flask, Blueprint, jsonify, json, request, abort
from flask_cors import CORS, cross_origin
import modals


client_blueprint = Blueprint('api_client', __name__,)


@client_blueprint.route('/client', methods=['GET'])
@cross_origin()
def home():
    return jsonify("Client API")


@client_blueprint.route('/client', methods=['POST'])
@cross_origin()
def api_client_add():
    if not request.is_json:
        return jsonify({"msg": "not json format"})
    post_data = request.get_json()
    name = post_data["username"]
    age = post_data["age"]
    sex = post_data["sex"]
    medical_history = post_data["medical_history"]

    user = modals.Patient.insert().values(username=name, age=age, sex=sex, medical_history=medical_history)
    con = modals.db.engine.connect()
    con.execute(user)
    con.close()
    return "Client registered."


@client_blueprint.route('/client', methods=['PUT'])
@cross_origin()
def api_client_edit():
    session = modals.db.get_session()
    if not request.is_json:
        return jsonify({"msg": "not json format"})
    post_data = request.get_json()
    # post_data = post_data["data"]
    pat_id = post_data["pat_id"]
    name = post_data["username"]
    age = post_data["age"]
    sex = post_data["sex"]
    medical_history = post_data["medical_history"]
    stmt = modals.Patient.update().where(modals.Patient.c.pat_id == pat_id).\
        values(username=name, age=age, sex=sex, medical_history=medical_history)
    con = modals.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Client updated."


@client_blueprint.route('/client/<id>', methods=["GET"])
@cross_origin()
def api_client_id(id):
    session = modals.db.get_session()
    data_to_return = []
    # results = session.query(modals.Patient)
    entry = session.query(modals.Patient).filter_by(pat_id=id).first()
    # entry = modals.Patient.query.filter_by(pat_id=id).first()
    if entry is not None:
        data = dict()
        data["username"] = entry.username
        data["pat_id"] = entry.pat_id
        data["age"] = entry.age
        data["sex"] = entry.sex
        data["medical_history"] = entry.medical_history
        data_to_return.append(data)
        return jsonify(data_to_return)
    else:
        abort(404, 'Person not found for Id: {pat_id}'.format(pat_id=id))


@client_blueprint.route('/client/all', methods=["GET"])
@cross_origin()
def api_clients_all():
    session = modals.db.get_session()
    data_to_return = []
    for entry in session.query(modals.Patient):
        data = dict()
        data["username"] = entry.username
        data["pat_id"] = entry.pat_id
        data["age"] = entry.age
        data["sex"] = entry.sex
        data["medical_history"] = entry.medical_history
        data_to_return.append(data)
    return jsonify(data_to_return)
