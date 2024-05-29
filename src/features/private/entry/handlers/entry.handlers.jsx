// Vendors
import axios from "@/core/config/axios";
// Constants
import constants from "./constants/beer.handlers.constants";

const fetchHandler = async ({ word, setData, setLoading }) => {
  try {
    setLoading(true);
    const { data } = await axios.get(`${constants.PATH_ENTRY}/${word}`, {
      withCredentials: true,
    });
    setData(data);
  } catch (error) {
    console.error(error);
  }
  setLoading(false);
};

const EntryHandlers = ({ word, setData, setLoading }) => {
  return {
    handleFetch: () => fetchHandler({ word, setData, setLoading }),
  };
};

export default EntryHandlers;
