// Vendors
import axios from "@/core/config/axios";
// Libs
import { setFormErrors } from "@/core/lib/utils";

const editHandler = async ({ form, row, setOpen }) => {
  form.reset(row);
  setOpen(true);
  console.log("Edit", row);
};

const deleteHandler = async ({ row }) => {
  console.log("Delete", row);
};

const fetchHandler = async ({ setData, setLoading }) => {
  setLoading(true);

  try {
    const { data } = await axios.get("/beers", { withCredentials: true });
    setData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
const submitHandler = async ({ form, setMessage, setLoading, values }) => {
  setMessage({ text: "", type: "" });
  setLoading(true);

  try {
    const { data } = await axios.post("/auth/login", values, {
      withCredentials: true,
    });
    console.log(data);
    // form.reset();
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
    if (error.response.data.message) {
      setMessage({
        text: error.response.data.message.text,
        type: error.response.data.message.type,
      });
    }
  } finally {
    setLoading(false);
  }
};

const clickAddRecordHandler = ({ setOpen }) => {
  setOpen(true);
};

const LoginHandlers = ({ form, setData, setMessage, setLoading, setOpen }) => {
  return {
    handleEdit: (row) => editHandler({ form, row, setOpen }),
    handleDelete: (row) => deleteHandler({ row }),
    handleFetch: () => fetchHandler({ setData, setLoading }),
    handleClickAddRecord: () => clickAddRecordHandler({ setOpen }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        setData,
        setMessage,
        setLoading,
        setOpen,
        values,
      }),
  };
};

export default LoginHandlers;
