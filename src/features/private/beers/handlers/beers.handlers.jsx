// Vendors
import axios from "@/core/config/axios";
import { toast } from "sonner";
// Constants
import beersConstants from "../constants/beers.constants";
import constants from "./constants/beers.handlers.constants";
// Libs
import { setFormErrors } from "@/core/lib/utils";
// Utils
import { getBase64, isImage } from "../utils/beer.utils";

const changeInputFileHandler = async ({ e, form, setImagePreviewSrc }) => {
  if (!e.target?.files?.length) {
    return;
  }

  const file = e.target.files[0];

  if (file && !isImage(file)) {
    toast.error("Tipo de archivo no permitido");
    form.setValue("image", undefined);
    setImagePreviewSrc(beersConstants.DEFAULT_IMAGE_PREVIEW_SRC);
    return;
  }

  try {
    const base64 = await getBase64(file);
    setImagePreviewSrc(base64);
  } catch (error) {
    console.error(error);
  }
};

const createHandler = ({ setOpenDialog }) => {
  setOpenDialog(true);
};

const deleteHandler = async ({ row, setSelectedRow, setOpenAlert }) => {
  setSelectedRow(row);
  setOpenAlert(true);
};

const deleteImageHandler = ({ form, setImagePreviewSrc }) => {
  form.setValue("image", undefined);
  setImagePreviewSrc(beersConstants.DEFAULT_IMAGE_PREVIEW_SRC);
};

const deleteMultipleHandler = async ({
  rows,
  setSelectedRows,
  setOpenAlert,
}) => {
  setSelectedRows(rows);
  setOpenAlert(true);
};

const editHandler = async ({
  form,
  row,
  setImagePreviewSrc,
  setSelectedRow,
  setOpenDialog,
}) => {
  form.reset(row);
  setImagePreviewSrc(
    `https://res.cloudinary.com/ovelillaa/image/upload/w_480,c_scale,f_auto,q_auto/${row.cloudinaryPublicId}`
  );
  setSelectedRow(row);
  setOpenDialog(true);
};

const fetchHandler = async ({ setData, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.get(constants.PATH, { withCredentials: true });
    setData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const resetFormHandler = ({
  form,
  openAlert,
  openDialog,
  setImagePreviewSrc,
  setSelectedRow,
}) => {
  if (openAlert || openDialog) {
    return;
  }
  setImagePreviewSrc(beersConstants.DEFAULT_IMAGE_PREVIEW_SRC);
  setSelectedRow(null);
  form.reset(beersConstants.DEFAULT_FORM_VALUES);
};

const submitHandler = async ({
  selectedRow,
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}) => {
  if (selectedRow) {
    submitHandlerEdit({
      selectedRow,
      form,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  } else {
    submitHandlerCreate({
      form,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  }
};

const submitHandlerCreate = async ({
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}) => {
  setLoading(true);

  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) =>
    formData.append(key, key === "image" ? value[0] : value)
  );

  try {
    const { data } = await axios.post(constants.PATH, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    setOpenDialog(false);
    setData((prev) => [...prev, data.beer]);
    toast.success(data.message);
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
  } finally {
    setLoading(false);
  }
};

const submitHandlerEdit = async ({
  selectedRow,
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}) => {
  setLoading(true);
  console.log(values);
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) =>
    formData.append(key, key === "image" ? value[0] : value)
  );

  try {
    const { data } = await axios.put(
      `${constants.PATH}/${selectedRow._id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(data);
    setOpenDialog(false);
    setData((prev) =>
      prev.map((item) => (item._id === selectedRow._id ? data.beer : item))
    );
    toast.success(data.message);
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
  } finally {
    setLoading(false);
  }
};

const submitHandlerDelete = async ({ selectedRow, setData, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.delete(
      `${constants.PATH}/${selectedRow._id}`,
      {
        withCredentials: true,
      }
    );
    setData((prev) => prev.filter((item) => item._id !== selectedRow._id));
    toast.success(data.message);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const submitHandlerDeleteMultiple = async ({
  selectedRows,
  setData,
  setLoading,
  setSelectedRows,
}) => {
  console.log(selectedRows);
  setLoading(true);
  try {
    const { data } = await axios.delete(constants.PATH, {
      data: { ids: selectedRows.map((row) => row._id) },
      withCredentials: true,
    });
    setData((prev) => prev.filter((item) => !selectedRows.includes(item)));
    setSelectedRows([]);
    toast.success(data.message);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const LoginHandlers = ({
  form,
  openAlert,
  openDialog,
  selectedRow,
  selectedRows,
  setData,
  setImagePreviewSrc,
  setLoading,
  setOpenAlert,
  setOpenDialog,
  setSelectedRow,
  setSelectedRows,
}) => {
  return {
    handleChangeInputFile: (e) =>
      changeInputFileHandler({ e, form, setImagePreviewSrc }),
    handleCreate: () => createHandler({ form, setOpenDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteImage: () => deleteImageHandler({ form, setImagePreviewSrc }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleEdit: (row) =>
      editHandler({
        form,
        row,
        setImagePreviewSrc,
        setSelectedRow,
        setOpenDialog,
      }),
    handleFetch: () => fetchHandler({ setData, setLoading }),
    handleResetForm: () =>
      resetFormHandler({
        form,
        openAlert,
        openDialog,
        setImagePreviewSrc,
        setSelectedRow,
      }),
    handleSubmit: (values) =>
      submitHandler({
        selectedRow,
        form,
        setData,
        setLoading,
        setOpenDialog,
        values,
      }),
    handleSubmitDelete: () =>
      submitHandlerDelete({ selectedRow, setData, setLoading }),
    handleSubmitDeleteMultiple: () =>
      submitHandlerDeleteMultiple({
        selectedRows,
        setData,
        setLoading,
        setSelectedRows,
      }),
  };
};

export default LoginHandlers;
