import axios from "axios";

export const __signIn = async (form) => {

  return new Promise((resolve,reject)=>{
    resolve([])
  })
  return new Promise((resolve, reject) => {
    console.log("Reached Module", form);
    axios.post("inventory/consumableReports/listConsumableItemReportSummaryDatatable")
      .then(response => {
        // Process response if needed
        resolve("hhhhh"); // Resolve with data received from the server
      })
      .catch(error => {
        console.error("Error in __SignIn:", error);
        reject({ msg: "General.somethingWentWrong" });
      });
  });


};