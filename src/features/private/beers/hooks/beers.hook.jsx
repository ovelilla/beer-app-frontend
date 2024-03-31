// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import BeersHandlers from "../handlers/beers.handlers";
// Schemas
import { BeersSchema } from "../schemas/beers.schema";

const BeersHook = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(BeersSchema),
    defaultValues: {
      name: "",
      color: "",
      body: "",
      flavor: "",
      alcohol: 0,
      country: "",
      province: "",
      pairing: "",
      brand: "",
      class: "",
      style: "",
      craft: "",
      fermentation: "",
      ibus: 0,
      description: "",
      popularity: "",
      recommendation: "",
      brewery: "",
      reputation: "",
    },
  });

  const {
    handleClickAddRecord,
    handleDelete,
    handleEdit,
    handleFetch,
    handleSubmit,
  } = BeersHandlers({
    form,
    setData,
    setLoading,
    setMessage,
    setOpen,
  });

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    data,
    form,
    handleClickAddRecord,
    handleDelete,
    handleEdit,
    handleSubmit,
    loading,
    message,
    open,
    setOpen,
  };
};

export default BeersHook;
