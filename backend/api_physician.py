from flask import Blueprint, jsonify



# import modals
# from sqlalchemy.sql import text
# from datetime import date
physician_blueprint = Blueprint('api_physician', __name__,)


#dummy data for physician.
physician_list = [
        {'npi': 0,
         'username': 'tester01'},
        {'npi': 1,
         'username': 'tester02'},
        {'npi': 2,
         'username': 'tester03'}
    ]
physician_info = [
        {
         'username': 'tester01',
         'age': '23',
         'sex': 'M',
         'medical_history': 'stage 5 lung cancer'},
        {
         'username': 'tester02',
         'age': '22',
         'sex': 'F',
         'medical_history': 'stage 5 lung cancer'},
        {
         'username': 'tester03',
         'age': '35',
         'sex': 'M',
         'medical_history': 'stage 5 lung cancer'}
    ]


@physician_blueprint.route('/physician', methods=['GET'])
def home():
    return jsonify("PHYSICIAN API")


@physician_blueprint.route('/physician/<id>', methods=["GET"])
def api_physician_id():
    # Create an empty list for our results
    results = []

    # Loop through the data and match results that fit the requested ID.
    # IDs are unique, but other fields might return many results
    for physician in physician_info:
        if physician['npi'] == str(id):
            results.append(physician)
    return jsonify(results)


@physician_blueprint.route('/physician/all', methods=["GET"])
def api_physician_all():
    # return fetch_physician(data)
    return jsonify(physician_info)
