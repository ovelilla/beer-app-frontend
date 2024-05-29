// Vendors

import { useEffect, useState } from "react";
// Handlers
import BeertionarynHandlers from "../handlers/beertionary.handlers";
// Utils
import { getGroupedData, getFilteredData } from "../utils/beertionary.utils";

const BeertionarynHook = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const groupedData = getGroupedData(data);
  const filteredData = getFilteredData(groupedData, value);

  const { handleChange, handleFetch } = BeertionarynHandlers({
    setData,
    setLoading,
    setValue,
  });

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    filteredData,
    handleChange,
    loading,
    value,
  };
};

export default BeertionarynHook;
