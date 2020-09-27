import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True


# dummy data for client.


client_list = [
    {'pat_id': 0,
     'username': 'tester01'},
    {'pat_id': 1,
     'username': 'tester02'},
    {'pat_id': 2,
     'username': 'tester03'}
]


client_info = [
    {'pat_id': 0,
     'username': 'tester01',
     'age': '23',
     'sex': 'M',
     'medical_history': 'stage 5 lung cancer'},
    {'pat_id': 1,
     'username': 'tester02',
     'age': '22',
     'sex': 'F',
     'medical_history': 'stage 5 lung cancer'},
    {'pat_id': 2,
     'username': 'tester03',
     'age': '35',
     'sex': 'M',
     'medical_history': 'stage 5 lung cancer'}
]


@app.route('/', methods=['GET'])
def home():
    return jsonify("Client API")


@app.route('/api/v1/client/<id>', methods=["GET"])
def api_client_id():
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for client in client_info:
        if client['pat_id'] == str(id):
            results.append(client)
    return jsonify(results)


@app.route('/api/v1/clients', methods=["GET"])
def api_clients_all():
    # return fetch_clients(data)
    return jsonify(client_list)
