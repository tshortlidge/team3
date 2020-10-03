from flask import Flask, Request, jsonify, request, render_template
from api_client import client_blueprint
from api_physician import physician_blueprint
import modals
from flask_cors import CORS, cross_origin



from hashlib import sha256
app = Flask(__name__)
app.register_blueprint(client_blueprint)
app.register_blueprint(physician_blueprint)
    #app = Flask(__name__)


@app.route('/')
def login():

    return "Hello World"


@app.route('/success')
def success():
    return "success"


@app.route('/register', methods = ["GET", "POST"])
def register():
    return render_template("register.html")


@app.route('/adduser', methods = ['POST'])
def adduser():
    name = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')

    user = modals.User.insert().values(name=name, email=email, password=password, user_type="physician")
    con = modals.db.engine.connect()
    con.execute(user)

    return "user registered"


@app.route('/logincheck', methods= ['GET','POST'])
def logincheck():
     emailchk = request.form.get('email')
     passwordchk = request.form.get('password')

    #creating the login session
     session = modals.db.get_session()
     check = session.query(modals.User).filter_by(email=emailchk).first()
     if check is None:
         return render_template('login.html')
     else:
         if check.password == passwordchk and check.email==emailchk:
             return "user logged in"
         else:
             return render_template('login.html')

     session.close()
     return render_template("login.html")


@app.route("/get_case_history", methods=["POST", "GET"])
def get_case_history():
    # Need session key
    return "case history returned"


@app.route("/image_upload", methods=["POST", "GET"])
def handle_image_upload():
    data = dict()
    if Request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                             "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
    # Store image
    return "Image Uploaded"


@app.route("/manage_cases", methods=["GET", "POST"])
def manage_cases():
    data = request.args

    return data

@app.route("/get_account_info", methods=["GET"])
def get_account_info():

    # return fetch_account_info()
    return "GETTING ACCOUNT INFORMATION"


@app.route("/choose_doctor", methods=["POST", "GET"])
def choose_doctor():
    # Only accepts POST REQUEST
    data = dict()

    if Request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                        "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
        return Flask.json_encoder(data)
    return "doctor registered"


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=50000, debug=True)
