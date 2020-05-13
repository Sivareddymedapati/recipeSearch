import axios from 'axios'

const app_id = '02502174'
const app_key = 'ab98e12999a37b36187cffeed08953e0	'
const item = ""
const url = `https://api.edamam.com/search?q=${item}&app_id=${app_id}&app_key=${app_key}&diet=high-protein&from=0&to=21&calories=591-722&health=alcohol-free`

export const fetchData = async() => {
  try{
      const data = await axios.get(url);
       
      return data
  }
  catch(error) {

      }
}

