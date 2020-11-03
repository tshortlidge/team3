import models
from sqlalchemy.sql import text
from datetime import date
import requests


def insert_into_table(**kwargs):
    '''
    inserts into table based on k=v pairs in the parameters. You MUST supply a tablename=<Your Table> to use this.
    If your lefthand side of the parameter has a type, this will crash on the insert statement.
    :param
        **kwargs: table_colum=table_value pair
    :return
        None
    '''

    # Creates a dictionary based on name value pairs in function parameter
    d = dict()
    for k, v in kwargs.items():
        d[k] = v

    if not d.get("tablename", None):
        raise ValueError("Every call to this function needs a parameter 'tablename'")

    statement = "INSERT INTO " + d["tablename"] + "("
    col_names = ""
    value_names = ""
    for k in sorted(d.keys()):
        if k == "tablename":
            continue
        col_names += k + ", "

        value_names += "'" + str(d[k]) + "'" + ", "
    # Strip the excess ", "
    col_names = col_names[0:-2]
    value_names = value_names[0:-2]

    statement += col_names + ") VALUES(" + value_names + ")"
    print(text(statement))
    with models.db.engine.connect() as con:
        con.execute(text(statement))


def insert_all():
    '''
    method used to create dummy data
    :return: None
    '''

    insert_into_table(tablename="hospital", address="23 October street", city="Los Angeles", zip_code="90210")
    insert_into_table(tablename="hospital", address="22 April street", city="San Bernardino", zip_code="92321")
    insert_into_table(tablename="hospital", address="12 June ave", city="San Fransisco", zip_code="99820")


    insert_into_table(tablename="patient", medical_history="I have fallen and I cant get up",
                      sex="m", age=23, username="imapatient", email="patient@aol.com", password="123pass", name="Eric Deezy")

    insert_into_table(tablename="patient", medical_history="I have tripped and I cant get up",
                      sex="m", age=24, username="imapatient2", email="patient2@aol.com", password="123pass", name="Eric Deezy")

    insert_into_table(tablename="patient", medical_history="bumped elbow",
                      sex="f", age=26, username="imapatient3", email="patient3@aol.com", password="123pass", name="Eric Deezy")

    insert_into_table(tablename="physician", npi="1", name="Eric Diaz", bio="Human Butcher", addr="96 ave lane",
                      username="ericisbalanced", qual="PhDoctorate", reviewCnt="0", email="email@aol.hotmail",
                      password="password_is_plain_text")

    insert_into_table(tablename="physician", npi="2", name="Sammy Diaz", bio="Human", addr="99 ave lane",
                      username="Sammy", qual="PhDoctorate", reviewCnt="0", email="email2@aol.hotmail",
                      password="password_is_plain_text")

    insert_into_table(tablename="physician", npi="3", name="Eric Hasaan", bio="Butcher", addr="93 ave lane",
                      username="Hassan", qual="PhDoctorate", reviewCnt="0", email="email3@aol.hotmail",
                      password="password_is_plain_text")

    insert_into_table(tablename="record", pat_id=1, comment="Yep, thats bad", hospital_id=1)
    insert_into_table(tablename="record", pat_id=2, comment="not that bad", hospital_id=1)
    insert_into_table(tablename="record", pat_id=3, comment="whoa nelly!", hospital_id=1)

    # RECORD assessed ENTRIES
    insert_into_table(tablename="record_assessment", record_id=1, physician_id=1, pat_id=1,
                      assessment="assessed", completion_dt=date(2020, 2, 1), create_dt=date(2020, 1, 3), status="assessed")
    insert_into_table(tablename="record_assessment", record_id=2, physician_id=2, pat_id=2,
                      assessment="assessed", completion_dt=date(2020, 3, 1), create_dt=date(2020, 1, 2), status="assessed")
    insert_into_table(tablename="record_assessment", record_id=3, physician_id=3, pat_id=3,
                      assessment=None, completion_dt=date(2020, 2, 1), create_dt=date(2020, 1, 1), status="pending")

    # PAYMENT ENTRIES
    insert_into_table(tablename="payment", pat_id=1, record_id=1, total=1, is_paid=1)
    insert_into_table(tablename="payment", pat_id=2, record_id=2, total=2, is_paid=1)
    insert_into_table(tablename="payment", pat_id=3, record_id=3, total=3, is_paid=0)

    # RECORD ENTRIES



def insert_from_npi_gov(name="eric"):
    d = requests.get("https://npiregistry.cms.hhs.gov/api/?first_name="+name+"&limit=15&version=2.1")
    jsn = d.json()
    lngth = len(jsn["results"])
    if lngth == 0:
        return
    r = jsn["results"]
    for i in range(lngth):
        i = r[i]
        try:
            insert_into_table(tablename="physician",
                              npi=i["number"], name=i["basic"]["first_name"] + " " + i["basic"]["last_name"],
                              bio=i["taxonomies"][0]["desc"], addr=i["addresses"][0]["address_1"],
                              username=i["basic"]["first_name"]+i["addresses"][0]["postal_code"],
                              qual=i["taxonomies"][0]["desc"], reviewCnt=0,
                              email=i["basic"]["first_name"]+i["basic"]["last_name"]+"@aol.com",
                              password="123pass")
        except Exception as e:
            print(e)


def insertintorecords():
    my_session = models.db.get_session()
    my_session.execute("SET FOREIGN KEY CHECKS = 0")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "),(1234, 5496, 123456789, "comment1","3353")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (12389, 5996, 5694, " comment2", "3353")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "),(1894, 55696, 56654, " comment3","3363")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (123454, 545496, 52684, " comment4", "33589")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (147454, 5454786, 52894, " comment5", "89589")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (125434, 545496, 545684, " comment6", "33553")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (142389, 594596, 554694, " comment7", "33553")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (189544, 555696, 565654, " comment8", "33563")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (1234544, 54496, 526854, " comment9", "33589")
    my_session.execute("INSERT INTO records (record_id, pat_id, physician_id, comment, hospital_id) "
                       "VALUES (%s, %s, %s, %s, %s) "), (147554, 5454786, 52894, " comment10", "89589")

if __name__ == "__main__":
    insert_all()
    insert_from_npi_gov()
    insert_from_npi_gov("Kevin")
    insert_from_npi_gov("Trevor")
    insert_from_npi_gov("Lee")
    insert_from_npi_gov("Bernard")
    insert_from_npi_gov("Alannah")
    with models.db.engine.connect() as con:
        payment_entries = con.execute("select * from payment")
        for p_e in payment_entries:
            print(p_e)
