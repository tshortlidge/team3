import { people1 } from "./data.js";

const FromList = (list, index) => {
  return list[index];
};

const fetchUserData = (counter) => {
  const user_data = FromList(people1, counter);

  return user_data;
};

export const createDataList = (list = []) => {
  let counter = 0;
  while (list.length < 7) {
    list.push(fetchUserData(counter));
    counter = counter + 1;
  }
  return list;
};
