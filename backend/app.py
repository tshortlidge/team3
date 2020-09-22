from flask import Flask, Request

app = Flask(__name__)


@app.route('/')
def hello_world():

    return 'Hello World!'


@app.route('/account_creation')
def create_account():
    # account_information = request.get_json()
    # if !is_account_valid(account_information):
    #   return 404
    # insert_account_information(account_information)
    #
    #
    return 'created'


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=False)
