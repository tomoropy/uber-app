import axios from "axios";
import { foodsIndex } from "../urls";

export const fetchFoods = (restaurantsId) => {
  return axios.get(foodsIndex(restaurantsId))
  .then(res => {
    return res.data
  })
  .catch(e => console.log(e))
}
