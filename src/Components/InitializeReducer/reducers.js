

import {LIST_ITEM} from "../../Pages/index";

const INIT_STATE = {
  items: [],
};

const reducers = (state = INIT_STATE, action) => {

  console.log(action,"action  ");
    switch (action.type) {
      case LIST_ITEM:
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };

  console.log(reducers,"reducers");

  export default reducers;