from flask import Blueprint, jsonify, request, abort
from flask_cors import CORS, cross_origin
import modals
import smtplib

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

# Referencing unique keys to ensure uniqueness before inserting
    entry = physician_email(post_data["email"])
    if entry is not None:
        return "email exists"
    entry = physician_username(post_data["username"])
    if entry is not None:
        return "user exists"
    entry = physician_npi(post_data["npi"])
    if entry is not None:
        return "npi exists"

    npi = post_data["npi"]
    username = post_data["username"]
    name = post_data["name"]
    bio = post_data["bio"]
    addr = post_data["addr"]
    qual = post_data["qual"]
    reviewCnt = post_data["reviewCnt"]
    email = post_data["email"]
    password = post_data["password"]

    stmt = modals.Physician.insert().values(username=username, npi=npi, name=name, bio=bio,
                                            addr=addr, qual=qual, reviewCnt=reviewCnt, email=email, password=password)

    con = modals.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Physician registered."


@physician_blueprint.route('/physician', methods=['PUT'])
@cross_origin()
def api_physician_edit():
    session = modals.db.get_session()
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

    stmt = modals.Physician.update().where(modals.Physician.c.phy_id == phy_id)\
        .values(username=username, npi=npi, name=name, bio=bio, addr=addr, qual=qual, reviewCnt=reviewCnt,
                email=email, password=password)
    con = modals.db.engine.connect()
    con.execute(stmt)
    con.close()
    return "Physician updated."


@physician_blueprint.route('/physician/<id>', methods=["GET"])
@cross_origin()
def api_physician_id(id):
    session = modals.db.get_session()
    data_to_return = []
    entry = session.query(modals.Physician).filter_by(phy_id=id).first()
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
    session = modals.db.get_session()
    data_to_return = []
    for entry in session.query(modals.Physician):
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


def physician_email(p_email):
    session = modals.db.get_session()
    data_to_return = []
    entry = session.query(modals.Physician).filter_by(email=p_email).first()
    session.close()
    return entry


def physician_npi(p_npi):
    session = modals.db.get_session()
    data_to_return = []
    entry = session.query(modals.Physician).filter_by(npi=p_npi).first()
    session.close()
    return entry


def physician_username(p_uname):
    session = modals.db.get_session()
    data_to_return = []
    entry = session.query(modals.Physician).filter_by(username=p_uname).first()
    session.close()
    return entry

