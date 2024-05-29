// Vendors
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Handlers
import EntryHandlers from "../handlers/entry.handlers";

const EntryHook = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { word } = useParams();

  const { handleFetch } = EntryHandlers({
    word,
    setData,
    setLoading,
  });

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    data,
    loading,
  };
};

export default EntryHook;
