import axios from "axios"

export default {

  // Get Ryu's Data
  getFrameData: character => {
    console.log("Heading to " + character + "...")
      return axios.get('/api/framedata/' + character )
  },

  //route for getting normal moves to create a combo
  getComboData: character => {
    return axios.get('/api/combos/' + character + "")
  },

  postCombo: (character, combo) => {
    return axios.post('/api/combos/' + character, combo)
  },
}