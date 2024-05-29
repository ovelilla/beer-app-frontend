// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import beersConstants from "../constants/beers.constants";
// Handlers
import BeersHandlers from "../handlers/beers.handlers";
// Schemas
import { BeersSchema } from "../schemas/beers.schema";

const BeersHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagePreviewSrc, setImagePreviewSrc] = useState(
    beersConstants.DEFAULT_IMAGE_PREVIEW_SRC
  );
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const form = useForm({
    resolver: zodResolver(BeersSchema),
    defaultValues: beersConstants.DEFAULT_FORM_VALUES,
  });

  const {
    handleChangeInputFile,
    handleCreate,
    handleDelete,
    handleDeleteImage,
    handleDeleteMultiple,
    handleEdit,
    handleFetch,
    handleResetForm,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = BeersHandlers({
    form,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setImagePreviewSrc,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
  });

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    handleResetForm();
  }, [openDialog, openAlert]);

  return {
    data,
    form,
    handleChangeInputFile,
    handleCreate,
    handleDelete,
    handleDeleteImage,
    handleDeleteMultiple,
    handleEdit,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    imagePreviewSrc,
    loading,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setOpenAlert,
    setOpenDialog,
  };
};

export default BeersHook;
