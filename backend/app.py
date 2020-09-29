from flask import Flask, render_template, redirect, session, request
import hashlib
from hashlib import sha256
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey, Table, create_engine, inspect
from flask import session as login_session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

app = Flask(__name__)

base = declarative_base()

class user(base):
    __tablename__ = 'users'
    id = Column('id', Integer, primary_key=True)
    name = Column('name', String(100))
    email = Column('email', String(100))
    password = Column('password', String(2000))


engine = create_engine('sqlite:///db.sqlite3')
base.metadata.create_all(bind=engine)
sessions = sessionmaker(bind = engine)

@app.route('/')
def login():

    return render_template("login.html")

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/register', methods = ["GET", "POST"])
def register():
    return render_template("register.html")



@app.route('/adduser', methods = ['POST'])
def adduser():
    name = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')


    session = sessions()
    adduser = user()
    adduser.name = name
    adduser.email = email
    adduser.password = password
    session.add(adduser)
    session.commit()
    session.close()

    return "user registered"





@app.route('/logincheck', methods= ['GET','POST'])
def logincheck():
     emailchk = request.form.get('email')
     passwordchk = request.form.get('password')

    #creating the login session
     session = sessions()
     check = session.query(user).filter_by(email=emailchk).first()
     if check is None:
         return render_template('login.html')
     else:
         if check.password == passwordchk and check.email==emailchk:
             return "user logged in"
         else:
             return render_template('login.html')

     session.close()
     return render_template("login.html")





if __name__ == '__main__':
    app.run()
