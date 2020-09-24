from flask import Flask, Request, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():

    return 'Hello World!'


@app.route('/account_creation')
def create_account():
    data = dict()
    if Request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                             "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
        return jsonify(data)
    # account_information = request.get_json()
    # if !is_account_valid(account_information):
    #   return 404
    # insert_account_information(account_information)
    #
    #
    return 'created'


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


@app.route("/send_email", methods=["POST", "GET"])
def handle_emails():

    return "email sent"


@app.route("/choose_doctor", mothods=["POST", "GET"])
def choose_doctor():
    # Only accepts POST REQUEST
    data = dict()
    if Request.method == 'GET':
        data["error"] = "Do Not Send GET requests to this end point. Use a POST request instead:\n " \
                        "https://www.educative.io/edpresso/how-to-make-an-axios-post-request"
        return Flask.json_encoder(data)
    return "doctor registered"


@app.route("/get_account_info", methods=["GET"])
def get_account_info():

    # return fetch_account_info()
    return "GETTING ACCOUNT INFORMATION"


@app.route("/manage_cases", methods=["GET", "POST"])
def manage_cases():
    data = Request.get_data()
    return jsonify(data)




if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=False)
