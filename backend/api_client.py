from flask import Blueprint, jsonify, json, request
import decimal, datetime
import modals

# import modals
# from sqlalchemy.sql import text
# from datetime import date
client_blueprint = Blueprint('api_client', __name__,)


@client_blueprint.route('/client', methods=['GET'])
def home():
    return jsonify("Client API")


@client_blueprint.route('/client', methods=['POST'])
def api_client_add():
    print(request)
    if not request.is_json:
        return jsonify({"msg": "not json format"})
    post_data = request.get_json()
    # post_data = post_data["data"]
    name = post_data["username"]
    age = post_data["age"]
    sex = post_data["sex"]
    medical_history = post_data["medical_history"]

    #     user = modals.User.insert().values(username=name, email=email, password=password, user_type="patients")
    user = modals.Patient.insert().values(username=name, age=age, sex=sex, medical_history=medical_history)
    con = modals.db.engine.connect()
    con.execute(user)
    con.close()
    return "Client registered."


@client_blueprint.route('/client/<id>', methods=["GET"])
def api_client_id():
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for client in client_info:
        if client['pat_id'] == str(id):
            results.append(client)
    return jsonify(results)


@client_blueprint.route('/client/all', methods=["GET"])
def api_clients_all():
    # return fetch_clients(data)
    session = modals.db.get_session()
    data_to_return = []
    # results = session.query(modals.Patient)
    for entry in session.query(modals.Patient):
        data = dict()
        data["username"] = entry.username
        data["pat_id"] = entry.pat_id
        data["age"] = entry.age
        data["sex"] = entry.sex
        data["medical_history"] = entry.medical_history
        data_to_return.append(data)
    return jsonify(data_to_return)
    # return json.dumps([dict(r) for r in results], default=str)
    # return jsonify(client_info)