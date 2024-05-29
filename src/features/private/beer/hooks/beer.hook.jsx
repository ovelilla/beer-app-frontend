// Vendors
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Handlers
import BeerHandlers from "../handlers/beer.handlers";

const BeerHook = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const { handleFetchBeer, handleLike } = BeerHandlers({
    id,
    setData,
    setLoading,
  });

  useEffect(() => {
    handleFetchBeer();
  }, []);

  return {
    data,
    handleLike,
    loading,
  };
};

export default BeerHook;
