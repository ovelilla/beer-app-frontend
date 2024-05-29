// Vendors
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import fidnerConstants from "../constants/finder.constants";
// Handlers
import FinderHandlers from "../handlers/finder.handlers";
// Schemas
import { FinderSchema } from "../schemas/finder.schema";

const FinderHook = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FinderSchema),
    defaultValues: fidnerConstants.DEFAULT_FORM_VALUES,
  });

  const { handleLike, handlePrevious, handleSubmit } = FinderHandlers({
    form,
    setData,
    setLoading,
  });

  return {
    data,
    form,
    handleLike,
    handlePrevious,
    handleSubmit,
    loading,
  };
};

export default FinderHook;
