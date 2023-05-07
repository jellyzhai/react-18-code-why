import axios from "axios";
import { GET_VUE_GOLD_VIPS, GET_VUE_BRONZE_VIPS } from "./constants";

export const setVueSilverVipsAction = (vueSilverVips) => ({
  type: GET_VUE_GOLD_VIPS,
  vueSilverVips,
});

export const getVueSilverVipsAction = () => {
  return (dispatch) => {
    axios.get("https://sponsors.vuejs.org/data.json").then((res) => {
      dispatch(setVueSilverVipsAction(res.data.silver));
    });
  };
};

export const setVueBronzeVipsAction = (vueBronzeVips) => ({
  type: GET_VUE_BRONZE_VIPS,
  vueBronzeVips,
});

export const getVueBronzeVipsAction = () => {
  return (dispatch) => {
    axios.get("https://sponsors.vuejs.org/data.json").then((res) => {
      dispatch(setVueBronzeVipsAction(res.data.bronze));
    });
  };
};
