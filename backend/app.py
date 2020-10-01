from flask import Flask, request, jsonify, render_template
import modals
from hashlib import sha256

app = Flask(__name__)


app = Flask(__name__)


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


@app.route("/test_post", methods=['POST'])
def test_post():
    # Test method for the front end team to see what they're sending us.
    # receive JSON, send JSON
    print(request.is_json)
    post_data = request.get_json()

    return post_data


@app.route('/logincheck', methods= ['GET','POST'])
def logincheck():

    '''
    Method to validate user login
    :return: :str
    '''

    post_data = request.get_json()
    emailchk = post_data['email']
    passwordchk = post_data['password']

    # creating the login session
    session = modals.db.get_session()
    check = session.query(modals.User).filter_by(email=emailchk).first()
    session.close()
    if check is None:
        return "error"
    else:
        if check.password == passwordchk and check.email == emailchk:
            return "user logged in"
        else:
            return "error"


@app.route("/get_case_history", methods=["POST", "GET"])
def get_case_history():
    # Need session key
    return "case history returned"


@app.route("/image_upload", methods=["POST", "GET"])
def handle_image_upload():
    data = dict()
    if request.method == 'GET':
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

    if request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                        "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
        return Flask.json_encoder(data)
    return "doctor registered"


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=False)
