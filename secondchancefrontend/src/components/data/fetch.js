import { people1 } from "./data.js";


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
