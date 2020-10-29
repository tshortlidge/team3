from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, MetaData
from sqlalchemy import Table, Column, Integer, String, ForeignKey, Date, Float, Boolean
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import inspect
import models
from models import CloudDB,Column, metadata, ratings, physicians
import random



def InsertTableData(doctornpi, comment, percent, patid):
    #This part will generate a random comment ID
    print("Generating comment ID")
    reviewid = random.randint(1000000, 9999999)

    #THIS PART WILL CHECK THE PHYSICIAN TABLE TO GRAB THEIR NPI
    doctor_npi = doctornpi
    my_session = models.db.get_session()
    information = my_session.execute("SELECT npi FROM physician WHERE npi = {}".format(doctor_npi))

    if list(information) == []:
        print("ERROR: DOCTOR NOT FOUND")
        my_session.close()
    else:
        my_session.execute("INSERT INTO rating(review_id, npi, pat_id, comment, score) "
                           "VALUES(:review_id,:npi,:pat_id,:comment,:score)", {"review_id":reviewid, "npi":doctor_npi, "pat_id":patid, "comment":comment, "score":percent})
        my_session.commit()
        my_session.close()


#this function will checks for all the reviews that a doctor has
def SpecificDocRev(doctornpi):
    my_session = models.db.get_session()
    #THIS PART GRABS ALL THE NEEDED INFORMATION
    information = my_session.execute("SELECT npi, comment, score FROM rating WHERE npi = {}".format(doctornpi))
    #THIS PART GRABS ALL THE RATINGS IN ORDER TO DO THE CHECK
    ratings = my_session.execute("SELECT comment FROM rating WHERE npi = {}".format(doctornpi))
   #THIS PART WILL CHECK THE PHYSICIAN NPI TO MAKE SURE THAT THE INFORMATION IS VALID
    phy_npi = my_session.execute("SELECT npi FROM physician WHERE npi = {}".format(doctornpi))

    if list(phy_npi) == []:
        print("ERROR: THIS DOCTOR DOES NOT EXIST")
    else:
        if list(ratings) == []:
            print("This doctor has no ratings")
        else:
            for int in information:
                print(int)


    my_session.close()




def DisplayAll():
    my_session = models.db.get_session()

    command = "SELECT * FROM rating"
    display = my_session.execute(command)

    for int in display:
        print(int)
    my_session.close()

def writerating(patient_id, doctornpi):
    #this comment will be a placeholder for the while statement
    #THIS PART HANDLES THE COMMENT WRITING

    less = False
    while less == False:
       comment = str(input("Write your comment(limit 400 characters): "))
       if len(comment) <= 400:
            less = True
       else:
           print("ERROR: MUST BE LESS THAN 400 CHARACTERS")

    #THIS PART HANDLES THE PERCENTAGE
    check = False
    while check ==False:
        percent = int(input("Insert the percentage score (Min 0, Max 100): "))
        if percent >100 or percent <0:
            print("ERROR: MUST BE BETWEEN 0 AND 100")
        else:
            check = True


    InsertTableData(doctornpi, comment, percent, patient_id)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    patient_id = 55234
    doctornpi = 334567890

    writerating(patient_id, doctornpi)
    print('\n')
    DisplayAll()
    print('\n')
    SpecificDocRev(doctornpi)


