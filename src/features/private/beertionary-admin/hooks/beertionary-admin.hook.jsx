// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import beertionaryAdminConstants from "../constants/beertionary-admin.constants";
// Handlers
import BeertionaryAdminHandlers from "../handlers/beertionary-admin.handlers";
// Schemas
import { EntrySchema } from "../schemas/entry.schema";

const BeertionaryAdminHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const form = useForm({
    resolver: zodResolver(EntrySchema),
    defaultValues: beertionaryAdminConstants.DEFAULT_FORM_VALUES,
  });

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleFetch,
    handleResetForm,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = BeertionaryAdminHandlers({
    form,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
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
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setOpenAlert,
    setOpenDialog,
  };
};

export default BeertionaryAdminHook;
