import React from 'react';
import PicOfDoc1 from '../images/dr_female/female_quality_1/female_doctor_1.jpg';
import PicOfDoc2 from '../images/dr_female/female_quality_1/female_doctor_2.jpg';
import PicOfDoc3 from '../images/dr_female/female_quality_1/female_doctor_3.jpg';
import PicOfDoc4 from '../images/dr_female/female_quality_1/female_doctor_4.jpg';
import PicOfDoc5 from '../images/dr_female/female_quality_1/female_doctor_5.jpg';
import PicOfDoc6 from '../images/dr_female/female_quality_1/female_doctor_6.jpg';
import PicOfDoc7 from '../images/dr_male/male_quality_1/male_doctor_1.jpg';
import PicOfDoc8 from '../images/dr_male/male_quality_1/male_doctor_2.jpg';
import PicOfDoc9 from '../images/dr_male/male_quality_1/male_doctor_3.jpg';


//export let people1 = [];





export function GrabDrCardInfo(props)
{

  //Calls to endpoint for every doctors' info
  //then push into people1 array
    console.log("Testing get_all_physician_records POST");
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"phy_id":1})
    };

    fetch("http://52.247.220.137:80/get_all_physician_records",requestOptions)
        .then(response => response.json())
        .then(
            (result) =>
            {

              /*
* name: "Dr.Stevens",
    about: "",
    age: 46,
    image: PicOfDoc1,
    location: "Ronald Reagan UCLA Medical Center",
    email: "somedoctor@medicalplace.com",
    rating: "4.5",
    npi:"0",
    specialty:"Orthopedic surgeon"
* */

              let l = result.length;
              let peopleArray = [];
              for(let i = 0; i < l; i++)
              {
                peopleArray[i].name = result[i].name;
                peopleArray[i].age = Math.random()%30+30;
                peopleArray[i].location = result[i].addr;
                peopleArray[i].email = result[i].email;
                peopleArray[i].rating = "CONSULT BACKEND ABOUT A FLOAT RATING [0.0, 5.0]";
                peopleArray[i].npi = result[i].npi;
                peopleArray[i].specialty = result[i].qual;
                peopleArray[i].drId = result[i].phy_id;

              }
              this.props.processPeople(peopleArray);

            }
        );





}

/*
export const people1 = [
  {
    name: "Dr.Stevens",
    about: "",
    age: 46,
    image: PicOfDoc1,
    location: "Ronald Reagan UCLA Medical Center",
    email: "somedoctor@medicalplace.com",
    rating: "4.5",
    npi:"0",
    specialty:"Orthopedic surgeon"
  },
  {
    name: "Dr.Bob",
    about: "",
    age: 32,
    image: PicOfDoc7,
    location: "Some Hospital",
    email: "somedoctor@medicalplace.com",
    rating: "3.5",
    npi:"1",
    specialty:"Surgeon"
  },
  {
    name: "Dr.Sandra",
    about: "",
    age: 58,
    image: PicOfDoc3,
    location: "Some Hospital",
    email: "somedoctor@medicalplace.com",
    rating: "3.5",
    npi:"2",
    specialty:"Orthopedic Surgeon"
  },
  {
    name: "Dr.Chloe",
    age: 36,
    about:"",
    image: PicOfDoc4,
    location: "Some Hospital",
    email: "somedoctor@medicalplace.com",
    rating: "4",
    npi:"3",
    specialty:"Surgeon"
  },
  {
    name: "Dr.Alexa",
    about:"",
    age: 40,
    image: PicOfDoc5,
    location: "Ronald Reagan UCLA Medical Center",
    email: "somedoctor@medicalplace.com",
    rating: "5",
    npi:"4",
    specialty:"orthopedic surgeon"
  },
  {
    name: "Dr.Maria",
    about:"",
    age: 41,
    image: PicOfDoc6,
    location: "Ronald Reagan UCLA Medical Center",
    email: "somedoctor@medicalplace.com",
    rating: "1.7",
    npi:"5",
    specialty:"orthopedic surgeon"
  },
  {
    name: "Dr.Emma",
    about:"",
    age: 54,
    image: PicOfDoc2,
    location: "Ronald Reagan UCLA Medical Center",
    email: "somedoctor@medicalplace.com",
    rating: "4.5",
    npi:"6",
    specialty:"orthopedic surgeon"
  },
  {
    name: "Dr.Sunny",
    about:"",
    age: 32,
    image: PicOfDoc8,
    location: "Some Hospital",
    email: "somedoctor@medicalplace.com",
    rating: "4",
    npi:"7",
    specialty:"orthopedic surgeon"
  },
  {
    name: "Dr.Adams",
    about:"",
    age: 22,
    image: PicOfDoc9,
    location: "Some Hospital",
    email: "somedoctor@medicalplace.com",
    rating: "5",
    npi:"8",
    specialty:"orthopedic surgeon"
  }
];

*/
