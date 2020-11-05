from api_client import client_blueprint
from api_physician import physician_blueprint
from flask import Flask, request, jsonify, render_template, send_from_directory, session
import models
from flask_cors import CORS, cross_origin
import os
import random


template_dir = os.path.abspath('./static/build/')
print(template_dir)
app = Flask(__name__, static_folder=template_dir)
app.register_blueprint(client_blueprint)
app.register_blueprint(physician_blueprint)

# To let the front end team execute javascript from a different ip address
cors = CORS(app)

app.secret_key = b'lol123'
@app.route('/')
@cross_origin()
def login():
    # Load the reactjs frontend
    return render_template("index.html")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
@cross_origin()
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return ""


@app.route('/success')
@cross_origin()
def success():
    return "success"


@app.route('/register', methods = ["GET", "POST"])
@cross_origin()
def register():
    return render_template("register.html")


@app.route('/adduser', methods = ['POST'])
@cross_origin()
def adduser():
    request.get_data()
    if not request.is_json:
        return "not json"
    post_data = request.get_json()
    post_data = post_data["data"]
    print(post_data["name"], "name")
    name = post_data["name"]
    email = post_data["email"]
    password = post_data["password"]

    user = models.User.insert().values(name=name, email=email, password=password, user_type="physician")
    con = models.db.engine.connect()
    con.execute(user)
    con.close()
    return "user registered"


@app.route("/get_users", methods=['GET', 'POST'])
@cross_origin()
def route_get_users():
    session = models.db.get_session()
    data_to_return = []
    for entry in session.query(models.User):
        data = dict()
        data["email"] = entry.email
        data["id"] = entry.id
        data["password"] = entry.password
        data["user_type"] = entry.user_type
        data_to_return.append(data)
    return jsonify(data_to_return)


@app.route("/test_post", methods=['POST'])
@cross_origin()
def test_post():
    # Test method for the front end team to see what they're sending us.
    # receive JSON, send JSON
    print(request.is_json)
    post_data = request.get_json()

    return post_data





@app.route('/logincheck', methods= ['GET','POST'])
@cross_origin()
def logincheck():

    '''
    Method to validate user login
    :return: :str
    '''

    post_data = request.get_json()
    emailchk = post_data['email']
    passwordchk = post_data['password']

    # creating the login session
    session = models.db.get_session()
    check = session.query(models.User).filter_by(email=emailchk).first()
    session.close()
    if check is None:
        return "error"
    else:
        if check.password == passwordchk and check.email == emailchk:
            return "user logged in"
        else:
            return "error"


@app.route("/get_case_history", methods=["POST", "GET"])
@cross_origin()
def get_case_history():
    # Need session key
    return "case history returned"


@app.route("/image_upload", methods=["POST", "GET"])
@cross_origin()
def handle_image_upload():
    data = dict()
    if request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                             "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
    # Store image
    return "Image Uploaded"


@app.route("/manage_cases", methods=["GET", "POST"])
@cross_origin()
def manage_cases():
    data = request.args

    return data

@app.route("/get_account_info", methods=["GET"])
@cross_origin()
def get_account_info():

    # return fetch_account_info()
    return "GETTING ACCOUNT INFORMATION"


@app.route("/choose_doctor", methods=["POST", "GET"])
@cross_origin()
def choose_doctor():
    # Only accepts POST REQUEST
    data = dict()

    if request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                        "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
        return Flask.json_encoder(data)
    return "doctor registered"


@app.route('/insertreview', methods=["GET", "POST"])
def insertreview():
    reviewid = random.randint(1000000, 9999999)

    doctor_npi = request.form.get("doctornpi")
    comment = request.form.get("comment")
    patid = request.form.get("patid")
    percent = request.form.get("percent")

    my_session = models.db.get_session()
    information = my_session.execute("SELECT npi FROM physician WHERE npi = {}".format(doctor_npi))

    if list(information) == []:
        my_session.close()
        return "ERROR: Doctor Not Found"
    else:
        my_session.execute("SET FOREIGN_KEY_CHECKS = 0")
        my_session.execute("INSERT INTO rating(review_id, npi, pat_id, comment, score) "
                           "VALUES(:review_id,:npi,:pat_id,:comment,:score)",
                           {"review_id": reviewid, "npi": doctor_npi, "pat_id": patid, "comment": comment,
                            "score": percent})
        my_session.execute("SET FOREIGN_KEY_CHECKS = 1")
        my_session.commit()
        my_session.close()
        return 'added doctor review'

@app.route('/checkspecificdocrev', methods = ["GET", "POST"])
def checkspecificdocrev():

    doctornpi = request.form.get("doctornpi")

    my_session = models.db.get_session()
    datareturn = []
    my_session.execute("SET FOREIGN_KEY_CHECKS = 0")

    entry = my_session.query(models.ratings).filter_by(npi = doctornpi).first()


    if entry is not None:
        for int in entry:
            data = dict()
            data["npi"] = entry.npi
            data["comment"] = entry.comment
            data["score"] = entry.score

            datareturn.append(data)

    my_session.execute("SET FOREIGN_KEY_CHECKS = 1")
    my_session.close()

    if datareturn == []:
        return "ERROR DOCTOR NPI NOT ON SYSTEM"
    else:
        return jsonify(datareturn)




@app.route('/displayallratings', methods = ["GET", "POST"])
def displayallratings():
    my_session = models.db.get_session()
    datareturn = []
    my_session.execute("SET FOREIGN_KEY_CHECKS = 0")
    for entry in my_session.query(models.ratings):
        data = dict()
        data["reviewid"] = entry.review_id
        data["npi"] = entry.npi
        data["pat_id"] = entry.pat_id
        data["comment"] = entry.comment
        data["score"] = entry.score
        datareturn.append(data)
    my_session.execute("SET FOREIGN_KEY_CHECKS = 1")
    return jsonify(datareturn)

@app.route('/writereview')
def writereview():
    return render_template('tempreview.html')

@app.route('/search')
def search():
    return render_template('insertreview.html')

if __name__ == '__main__':
    app.run()
