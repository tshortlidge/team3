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
    # The commented code doesn't run because we're undergoing a refactoring on the patients and physicians tables
    # RECORD ASSESMENT ENTRIES
    # insert_into_table(tablename="record_assesment", record_id=1, physician_id=1, pat_id=1,
    #                   assesment="assessed", completion_dt=date(2020, 2, 1), status="assessed")
    # insert_into_table(tablename="record_assesment", record_id=2, physician_id=2, pat_id=2,
    #                   assesment="assessed", completion_dt=date(2020, 3, 1), status="assessed")
    # insert_into_table(tablename="record_assesment", record_id=3, physician_id=3, pat_id=3,
    #                   assesment=None, completion_dt=date(2020, 2, 1), status="pending")
    #
    # # PAYMENT ENTRIES
    # insert_into_table(tablename="payment", pat_id=1, record_id=1, total=1, is_paid=1)
    # insert_into_table(tablename="payment", pat_id=2, record_id=2, total=2, is_paid=1)
    # insert_into_table(tablename="payment", pat_id=3, record_id=3, total=3, is_paid=0)

    # HOSPITAL ENTRIES
    insert_into_table(tablename="hospital", address="23 October street", city="Los Angeles", zip_code="90210")
    insert_into_table(tablename="hospital", address="22 April street", city="San Bernardino", zip_code="92321")
    insert_into_table(tablename="hospital", address="12 June ave", city="San Fransisco", zip_code="99820")


if __name__ == "__main__":
    insert_all()

    with models.db.engine.connect() as con:
        payment_entries = con.execute("select * from payment")
        for p_e in payment_entries:
            print(p_e)
