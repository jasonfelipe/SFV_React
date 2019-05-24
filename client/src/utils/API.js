import axios from "axios"

export default {

  // Get Ryu's Data
  getFrameData: character => {
    console.log("Heading to " + character + "...");
      return axios.get('/api/framedata/' + character );
  },

  //route for getting normal moves to create a combo
  getComboData: character => {
    console.log("Finding Combos from " + character + "...");
    return axios.get('/api/combos/' + character);
  },

  postCombo: (character, data) => {
    console.log("Inside API.....", character, data);
    return axios.post('/api/combos/' + character, data);
  },
}