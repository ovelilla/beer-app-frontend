// Vendors
import axios from "@/core/config/axios";
import { toast } from "sonner";
// Constants
import constants from "./constants/finder.handlers.constants";
// Libs
import { setFormErrors } from "@/core/lib/utils";

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
    setData((prevData) =>
      prevData.map((beer) =>
        beer._id === data.like.beerId
          ? { ...beer, likesCount: beer.likesCount + 1, userLike: data.like }
          : beer
      )
    );
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

const previousHandler = ({ form, setData }) => {
  form.reset();
  setData(null);
};

const removeLikeHandler = async ({ id, setData }) => {
  try {
    const { data } = await axios.delete(`${constants.PATH_LIKES}/${id}`, {
      withCredentials: true,
    });
    toast.success(data.message);
    setData((prevData) =>
      prevData.map((beer) =>
        beer._id === data.like.beerId
          ? { ...beer, likesCount: beer.likesCount - 1, userLike: null }
          : beer
      )
    );
  } catch (error) {
    console.error(error);
  }
};

const submitHandler = async ({ form, setData, setLoading, values }) => {
  setLoading(true);
  try {
    const { data } = await axios.post(constants.PATH_BEERS, values, {
      withCredentials: true,
    });
    setData(data);
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
  } finally {
    setLoading(false);
  }
};

const FinderHandlers = ({ form, setData, setLoading }) => {
  return {
    handleLike: (beer) => likeHandler({ beer, setData }),
    handlePrevious: () => previousHandler({ form, setData }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        setData,
        setLoading,
        values,
      }),
  };
};

export default FinderHandlers;
