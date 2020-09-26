def get_creds():
    cred_pairs = dict()
    with open("./creds.txt") as f:
        for line in f:
            prop, val = line.split('=')
            cred_pairs[prop] = val.strip('\n')
    return cred_pairs
 # hi dad

if __name__ == '__main__':
    creds = get_creds()
    print(creds)
