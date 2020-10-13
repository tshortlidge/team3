from api_client import client_blueprint
from api_physician import physician_blueprint
from flask import Flask, request, jsonify, render_template, send_from_directory
import models
from flask_cors import CORS, cross_origin
import os

template_dir = os.path.abspath('./static/build/')
print(template_dir)
app = Flask(__name__, static_folder=template_dir)
app.register_blueprint(client_blueprint)
app.register_blueprint(physician_blueprint)

# To let the front end team execute javascript from a different ip address
cors = CORS(app)


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


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=50000, debug=True)
