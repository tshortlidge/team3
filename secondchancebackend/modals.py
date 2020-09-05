"""
Filename: modals.py

Team name: Second Chance

Backend members: Kevin Vo, Kevin Ramos, Alannah Gavuzzi
Frontend members: Eric Diaz, Trevor Shortlidge, Bernie Rodriguez, Youngseung Lee

Project Description:
    6. Project title: Medical Imaging database system/Second opinion
    ----------------------------------------------------------------
    Description: Patients take medical images such as CTs, MRIs, x-rays from different medical
                facilities. They are scattered in different hospital databases. Create a central medical
                imaging database system where medical images can be uploaded by physicians from
                different hospitals. Patients and their doctors are able to log in and view all the uploaded
                images. The system also provides a service to the patients to get their image interpreted for
                a fee. It should allow the patients to view a list of radiologists with their bios and give them
                an option to choose which physician to interpret their image.

                Skills: databases, UI/UX, general + web programming, teamwork

    Purpose: Design datatables for images, physicians, patients, ratings, diagnoses, and transactions to then store as
             metadata for SQLAlchemy to create on a chosen database.


    Created on: Sept. 4, 2020 @ 4:14pm PDT

"""

import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy import inspect

#MetaData() contains objects that stores data about our tables to eventually be created my SQLAlchemy
metadata = Metadata()

"""
Creating table for physicians on the database
npi       -> National Provider Identifier Standard, a 10-digit number ID for healthcare providers
name      -> [Firstname Lastname]
bio       -> Info on physician's speciality, education, experiences, etc 
addr      -> The address of where the physician practices  
username  -> Unique username for physician to login
password  -> Password for login (hash-value)
qual      -> Qualifications of the physician
reviewCnt -> Used to display number of reviews for a physician on their profile by their patients
"""
physicians = Table('physicians', metadata,
                   Column('npi', Integer, primary_key = True, unique = True),
                   Column('name', String),
                   Column('bio', String),
                   Column('addr', String),
                   Column('username', String, unique = True),
                   Column('password', String),
                   Column('qual', String),
                   Column('reviewCnt', String),
                   )


"""
Creating table for patients
pat_id          -> Patients' unique ID {PK}
medical_history -> Info on patient's pre-existing medical conditions such as allergies, illnesses, and surgeries 
sex             -> Patient's gender
age             -> Age of the patient
username        -> Unique username for physician to login
password        -> Password for login (hash-value)
"""
patients = Table('patients', metadata,
                   Column('pat_id', Integer, primary_key = True, unique = True),
                   Column('medical_history', String),
                   Column('sex', String),
                   Column('age', Integer),
                   Column('username', String, unique = True),
                   Column('password', String),
                   )


"""
Creating table for ratings from patients on their physicians
review_id       -> A unique ID to identify a comment {PK}
npi             -> Unique National Provider Identifier Standard, a 10-digit number ID for healthcare providers {FK}
pat_id          -> Unique Patients' ID {FK}
comment         -> A patient's written comment on their experience with a physician
score           -> A rating system where viewers can quickly glance at (metric current undecided)
                                                                        (# of stars)
                                                                        (red vs green bar)
                                                                        (percentage value)
"""
ratings = Table('ratings', metadata,
                   Column('review_id', Integer, primary_key = True, unique = True),
                   Column('npi', Integer, foreign_key = True, unique = True),
                   Column('pat_id', Integer, foreign_key = True, unique = True),
                   Column('comment', String),
                   Column('score', String),
                   )

engine = create_engine('sqlite:///secondchance.db')
metadata.create_all(engine)

"""
    Still need to create tables for pivot, diagnoses, and transactions
    
    Look at db_tables.xlsx for references
        
"""

