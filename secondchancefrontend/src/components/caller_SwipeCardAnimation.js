import React from 'react';
import Body from '../views/body';
import '../css/animatedBackground.scss';

export class Caller_SwipeCardAnimation extends React.Component
{
    constructor(props) {
        super(props);

        this.state =
            {
                people1:[],
                isLoading: true
            };

        this.data = {
            totalNumofDoc: null
        }

    }

    async componentDidMount() {


        //Calls to endpoint for every doctors' info
        //then push into people1 array
        console.log("Testing get_all_physician_records POST");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"phy_id": 1})
        };

        let data = await fetch("http://52.247.220.137:80/get_all_physician_records", requestOptions)
            .then(response => response.json())
            .then(
                (result) => {

                    let l = result.length;
                    this.data.totalNumofDoc = l;    //get number of doctors for index of cards below
                    let peopleArray = [];
                    for (let i = 0; i < l; i++) {
                        peopleArray.push({});
                        peopleArray[i].name = result[i].name;
                        peopleArray[i].age = Math.random() % 30 + 30;
                        peopleArray[i].location = result[i].addr;
                        peopleArray[i].email = result[i].email;
                        peopleArray[i].rating = "CONSULT BACKEND ABOUT A FLOAT RATING [0.0, 5.0]";
                        peopleArray[i].npi = result[i].npi;
                        peopleArray[i].specialty = result[i].qual;
                        peopleArray[i].drId = result[i].phy_id;

                    }
                    this.loading = true;
                    this.setState(
                        {
                            people1: peopleArray,
                            isLoading: false
                        }
                    )
                    this.p = peopleArray;
                    return peopleArray;
                }
            )
        console.log("data");
        console.log(data);
        this.p = data;
    }

    FromList = (list, index) => {
        return list[index];
    };

    fetchUserData = (counter) => {
    const user_data = this.FromList(this.state.people1, counter);

    return user_data;
};

    createDataList = (list = []) => {
    let counter = 0;
    let max = 10;
    //this.data.totalNumofDoc = max;
        console.log("this.data.totalNumofDoc = " + this.data.totalNumofDoc)
    while (list.length < this.data.totalNumofDoc) {
        list.push(this.fetchUserData(counter));
        counter = counter + 1;
    }
    return list;
};


    render() {

        return(
            <div>

                {!this.state.isLoading && (
                    <Body drInfo = {this.state.people1}  createDataList = {(drList) => this.createDataList(drList)}/>
                )}
            </div>
        );
    }
}

/*
const FromList = (list, index) => {
  return list[index];
};

const fetchUserData = (counter) => {
  const user_data = FromList(people1, counter);

  return user_data;
};

export const createDataList = (list = []) => {
  let counter = 0;
  let maxNumCard = 7;
  while (list.length < maxNumCard) {
    list.push(fetchUserData(counter));
    counter = counter + 1;
  }
  return list;
};

 */