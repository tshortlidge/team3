from flask import Blueprint, jsonify, request, abort, session as flask_session
from flask_cors import cross_origin
import models
import smtplib
from sqlalchemy import and_, select

physician_blueprint = Blueprint('api_physician', __name__,)


@physician_blueprint.route('/physician', methods=['GET'])
@cross_origin()
def home():
    return jsonify("PHYSICIAN API")


@physician_blueprint.route('/physician', methods=['POST'])
@cross_origin()
def api_physician_add():
    if not request.is_json:
        return jsonify({"msg": "not json format"})
    post_data = request.get_json()
    npi = post_data["npi"]
    username = post_data["username"]
    name = post_data["name"]
    bio = post_data["bio"]
    addr = post_data["addr"]
    qual = post_data["qual"]
    reviewCnt = post_data["reviewCnt"]
    email = post_data["email"]
    password = post_data["password"]

    stmt = models.Physician.insert().values(username=username, npi=npi, name=name, bio=bio,
                                            addr=addr, qual=qual, reviewCnt=reviewCnt, email=email, password=password)

    con = models.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Physician registered."


@physician_blueprint.route('/physician', methods=['PUT'])
@cross_origin()
def api_physician_edit():
    session = models.db.get_session()
    if not request.is_json:
        return jsonify({"msg": "not json format"})
    post_data = request.get_json()

    phy_id = post_data["phy_id"]
    npi = post_data["npi"]
    username = post_data["username"]
    name = post_data["name"]
    bio = post_data["bio"]
    addr = post_data["addr"]
    qual = post_data["qual"]
    reviewCnt = post_data["reviewCnt"]
    email = post_data["email"]
    password = post_data["password"]

    stmt = models.Physician.update().where(models.Physician.c.phy_id == phy_id)\
        .values(username=username, npi=npi, name=name, bio=bio, addr=addr, qual=qual, reviewCnt=reviewCnt,
                email=email, password=password)
    con = models.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Physician updated."


@physician_blueprint.route('/physician/<id>', methods=["GET"])
@cross_origin()
def api_physician_id(id):
    session = models.db.get_session()
    data_to_return = []
    entry = session.query(models.Physician).filter_by(phy_id=id).first()
    session.close()
    if entry is not None:
        data = dict()
        data["phy_id"] = entry.phy_id
        data["username"] = entry.username
        data["name"] = entry.name
        data["npi"] = entry.npi
        data["bio"] = entry.bio
        data["addr"] = entry.addr
        data["qual"] = entry.qual
        data["reviewCnt"] = entry.reviewCnt
        data["email"] = entry.email
        data["password"] = entry.password

        data_to_return.append(data)
        return jsonify(data_to_return)
    else:
        abort(404, 'Person not found for Id: {phy_id}'.format(phy_id=id))


@physician_blueprint.route('/physician/all', methods=["GET"])
@cross_origin()
def api_physician_all():
    session = models.db.get_session()
    data_to_return = []
    for entry in session.query(models.Physician):
        data = dict()
        data["phy_id"] = entry.phy_id
        data["username"] = entry.username
        data["name"] = entry.name
        data["npi"] = entry.npi
        data["bio"] = entry.bio
        data["addr"] = entry.addr
        data["qual"] = entry.qual
        data["reviewCnt"] = entry.reviewCnt
        data["email"] = entry.email
        data["password"] = entry.password
        data_to_return.append(data)
    session.close()
    return jsonify(data_to_return)


@physician_blueprint.route('/physician/login', methods=["POST"])
@cross_origin()
def api_phyisician_login():
    if not request.is_json:
        return "not json"
    post_data = request.get_json()
    session = models.db.get_session()
    print(post_data)
    username = post_data["username"]
    password = post_data["password"]
    r = session.query(models.Physician).filter(models.Physician.c.username == username,
                                               models.Physician.c.password == password)

    if r.scalar():
        flask_session["logged_in"] = True
        return "logged in"

    return "not logged in"
