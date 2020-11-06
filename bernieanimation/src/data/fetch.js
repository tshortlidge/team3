import { people1 } from "./data.js";

const FromtheList = (list, index) => {
  return list[index];
};

const fetchUserData = (counter) => {
  const user_data = FromtheList(people1, counter);

  return user_data;
};

export const createDataList = (list = []) => {
  let counter = 0;
  while (list.length < 6) {
    list.push(fetchUserData(counter));
    counter = counter + 1;
  }
  return list;
};
