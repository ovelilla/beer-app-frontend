// Vendors
import axios from "@/core/config/axios";
// Constants
import constants from "./constants/beertionary.handlers.constants";

const changeHandler = ({ e, setValue }) => {
  setValue(e.target.value);
};

const fetchHandler = async ({ setData, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.get(constants.PATH, { withCredentials: true });
    setData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const BeertionaryHandlers = ({ setData, setLoading, setValue }) => {
  return {
    handleChange: (e) => changeHandler({ e, setValue }),
    handleFetch: () => fetchHandler({ setData, setLoading }),
  };
};

export default BeertionaryHandlers;
