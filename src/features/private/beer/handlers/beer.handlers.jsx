// Vendors
import axios from "@/core/config/axios";
import { toast } from "sonner";
// Constants
import constants from "./constants/beer.handlers.constants";

const fetchBeerHandler = async ({ id, setData, setLoading }) => {
  try {
    setLoading(true);
    const { data } = await axios.get(`${constants.PATH_BEERS}/${id}`, {
      withCredentials: true,
    });
    setData(data);
  } catch (error) {
    console.error(error);
  }
  setLoading(false);
};

const addLikeHandler = async ({ id, setData }) => {
  try {
    const { data } = await axios.post(
      constants.PATH_LIKES,
      { beerId: id },
      {
        withCredentials: true,
      }
    );
    toast.success(data.message);
    setData((prevData) => ({
      ...prevData,
      likesCount: prevData.likesCount + 1,
      userLike: data.like,
    }));
  } catch (error) {
    console.error(error);
  }
};

const likeHandler = async ({ beer, setData }) => {
  if (beer.userLike) {
    removeLikeHandler({ id: beer.userLike._id, setData });
  } else {
    addLikeHandler({ id: beer._id, setData });
  }
};

const removeLikeHandler = async ({ id, setData }) => {
  try {
    const { data } = await axios.delete(`${constants.PATH_LIKES}/${id}`, {
      withCredentials: true,
    });
    toast.success(data.message);
    setData((prevData) => ({
      ...prevData,
      likesCount: prevData.likesCount - 1,
      userLike: null,
    }));
  } catch (error) {
    console.error(error);
  }
};

const FavoriteHandlers = ({ id, setData, setLoading }) => {
  return {
    handleFetchBeer: () => fetchBeerHandler({ id, setData, setLoading }),
    handleLike: (beer) => likeHandler({ beer, setData }),
  };
};

export default FavoriteHandlers;
