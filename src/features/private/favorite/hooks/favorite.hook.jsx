// Vendors
import { useEffect, useState } from "react";
// Handlers
import FavoriteHandlers from "../handlers/favorite.handlers";

const FavoriteHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { handleFetchBeers, handleLike } = FavoriteHandlers({
    setData,
    setLoading,
  });

  useEffect(() => {
    handleFetchBeers();
  }, []);

  return {
    data,
    handleLike,
    loading,
  };
};

export default FavoriteHook;
