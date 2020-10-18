import requests
from json import dumps

def login_to_physician():
    dat = dict()
    dat["username"] = "ericisbalanced"
    dat["password"] = "password_is_plain_text"

    return requests.post("http://127.0.0.1:5000/physician/login", json=dat)


if __name__ == "__main__":
    r = login_to_physician()
    print(r.text)
    if r.text == "logged in":
        print("YES")
    else:
        print ("NO")
