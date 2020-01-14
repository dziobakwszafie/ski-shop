import data from "../skis-table.json";

const rootReducer = (state = data, action) => {
  return data;
};

export default rootReducer;
