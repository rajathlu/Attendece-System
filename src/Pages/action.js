

import { batch } from "react-redux";
import { LIST_ITEM } from ".";
import { __signIn } from "./Modules"; 

export const SignIn = (form) => (dispatch) => {
  
  return __signIn(form)
    .then((response) => {
      console.log("Response:", response);

      batch(() => {
        dispatch({
          type: LIST_ITEM,
          payload: response,
        });
      });

    
    })
   
};