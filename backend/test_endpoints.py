import requests
import sys



if __name__ == "__main__":
    remote_url = "http://52.247.220.137"
    local_url = "http://127.0.0.1:5000"
    url = local_url
    try:
        sys.argv[1]
        url = remote_url
    except:
        pass
    print(url)
    d = requests.get(url+"/client/1")
    print(d.text)
    try:
        print(d.json())
    except Exception as e:
        print(e)
    d = requests.get(url+"/client/all")
    print(d.text)
    try:
        print(d.json())
    except Exception as e:
        print(e)
    print(d.text)
    try:
        print(d.json())
    except Exception as e:
        print(e)
    d = requests.get(url+"/hospitals")
    print(d.text)
    try:
        print(d.json())
    except Exception as e:
        print(e)

    d = requests.get(url+"/get_pending_records", json={"phy_id": 3})
    print(d.text)
    try:
        print(d.json())
    except Exception as e:
        print(e)

