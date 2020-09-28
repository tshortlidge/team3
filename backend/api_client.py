import modals
from sqlalchemy.sql import text
from datetime import date

def add_dummy_data():
    # dummy data for client.
    client_list = [
        {'pat_id': 0,
         'username': 'tester01'},
        {'pat_id': 1,
         'username': 'tester02'},
        {'pat_id': 2,
         'username': 'tester03'}
    ]

    client_info = [
        {
         'username': 'tester01',
         'age': '23',
         'sex': 'M',
         'medical_history': 'stage 5 lung cancer'},
        {
         'username': 'tester02',
         'age': '22',
         'sex': 'F',
         'medical_history': 'stage 5 lung cancer'},
        {
         'username': 'tester03',
         'age': '35',
         'sex': 'M',
         'medical_history': 'stage 5 lung cancer'}
    ]

    record_assesment_data = [

    ]


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

    statement = "INSERT INTO " + d["tablename"] +"("
    table_names = ""
    value_names = ""
    for k in sorted(d.keys()):
        if k == "tablename":
            continue
        table_names +=  k  + ", "

        value_names += "'" + str(d[k]) + "'" + ", "

    table_names = table_names[0:-2]
    value_names = value_names[0:-2]

    statement += table_names + ") VALUES(" + value_names + ")"
    print(text(statement))
    with modals.db.engine.connect() as con:
        con.execute(text(statement))


if __name__ == "__main__":

    # RECORD ASSESMENT ENTRIES
    insert_into_table(tablename="record_assesment", record_id=1, physician_id=1, client_id=1,
                                  assesment="assessed", completion_dt=date(2020,2,1), status="assessed")
    insert_into_table(tablename="record_assesment", record_id=2, physician_id=2, client_id=2,
                                  assesment="assessed", completion_dt=date(2020,3,1), status="assessed")
    insert_into_table(tablename="record_assesment", record_id=3, physician_id=3, client_id=3,
                                  assesment=None, completion_dt=date(2020,2,1), status="pending")


    # PAYMENT ENTRIES
    insert_into_table(tablename="payment", client_id=1, record_id=1, total=1, is_paid=1)
    insert_into_table(tablename="payment", client_id=2, record_id=2, total=2, is_paid=1)
    insert_into_table(tablename="payment", client_id=3, record_id=3, total=3, is_paid=0)

    with modals.db.engine.connect() as con:
        payment_entries = con.execute("select * from payment")
        for p_e in payment_entries:
            print(p_e)
