from flask import Flask, Blueprint, jsonify, json, request, abort, session as flask_session
from flask_cors import CORS, cross_origin
import models


client_blueprint = Blueprint('api_client', __name__,)


@client_blueprint.route('/client', methods=['GET'])
@cross_origin()
def home():
    return jsonify("CLIENT API")


@client_blueprint.route('/client', methods=['POST'])
@cross_origin()
def api_client_add():
    if not request.is_json:
        return jsonify({"msg": "not json format"})

    post_data = request.get_json()

# Referencing unique keys to ensure uniqueness before inserting
    entry = client_email(post_data["email"])
    if entry is not None:
        return "email exists"
    entry = client_username(post_data["username"])
    if entry is not None:
        return "user exists"

    uname = post_data["username"]
    age = post_data["age"]
    sex = post_data["sex"]
    medical_history = post_data["medical_history"]
    name = post_data["name"]
    email = post_data["email"]
    password = post_data["password"]

    stmt = models.Patient.insert().\
        values(username=uname, age=age, sex=sex, medical_history=medical_history, email=email,
               name=name, password=password)
    con = models.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Client registered."


@client_blueprint.route('/client', methods=['PUT'])
@cross_origin()
def api_client_edit():
    if not request.is_json:
        return jsonify({"msg": "not json format"})
    post_data = request.get_json()
    # post_data = post_data["data"]
    pat_id = post_data["pat_id"]
    uname = post_data["username"]
    age = post_data["age"]
    sex = post_data["sex"]
    name = post_data["name"]
    medical_history = post_data["medical_history"]
    email = post_data["email"]
    password = post_data["password"]

    stmt = models.Patient.update().where(models.Patient.c.pat_id == pat_id).\
        values(username=uname, age=age, sex=sex, medical_history=medical_history,
               name=name, email=email, password=password)
    con = models.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Client updated."


@client_blueprint.route('/client/<id>', methods=["GET"])
@cross_origin()
def api_client_id(id):
    session = models.db.get_session()
    data_to_return = []
    entry = session.query(models.Patient).filter_by(pat_id=id).first()
    session.close()
    if entry is not None:
        data = dict()
        data["username"] = entry.username
        data["pat_id"] = entry.pat_id
        data["age"] = entry.age
        data["sex"] = entry.sex
        data["medical_history"] = entry.medical_history
        data["name"] = entry.name
        data["email"] = entry.email
        data["password"] = entry.password

        data_to_return.append(data)
        return jsonify(data_to_return)
    else:
        abort(404, 'Person not found for Id: {pat_id}'.format(pat_id=id))


@client_blueprint.route('/client/all', methods=["GET"])
@cross_origin()
def api_clients_all():
    session = models.db.get_session()
    data_to_return = []
    for entry in session.query(models.Patient):
        data = dict()
        data["username"] = entry.username
        data["pat_id"] = entry.pat_id
        data["age"] = entry.age
        data["sex"] = entry.sex
        data["name"] = entry.name
        data["medical_history"] = entry.medical_history
        data["email"] = entry.email
        data["password"] = entry.password
        data_to_return.append(data)
    session.close()
    return jsonify(data_to_return)


@client_blueprint.route('/client/login', methods=["POST"])
@cross_origin()
def api_patient_login():
    if not request.is_json:
        return "not json"
    post_data = request.get_json()
    session = models.db.get_session()
    print(post_data)
    username = post_data["username"]
    password = post_data["password"]
    r = session.query(models.Patient).filter(models.Patient.c.username == username,
                                             models.Patient.c.password == password)

    if r.count() == 1:
        v = r.first()
        flask_session["logged_in"] = True
        return jsonify(v._asdict())

    return "not logged in"


def client_email(c_email):
    session = models.db.get_session()
    data_to_return = []
    entry = session.query(models.Patient).filter_by(email=c_email).first()
    session.close()
    return entry


def client_username(c_uname):
    session = models.db.get_session()
    data_to_return = []
    entry = session.query(models.Patient).filter_by(username=c_uname).first()
    session.close()
    return entry
