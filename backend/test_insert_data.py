import models
from sqlalchemy.sql import text
from datetime import date


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

    # RECORD ASSESMENT ENTRIES
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

    # HOSPITAL ENTRIES

if __name__ == "__main__":
    insert_all()

    with models.db.engine.connect() as con:
        payment_entries = con.execute("select * from payment")
        for p_e in payment_entries:
            print(p_e)
