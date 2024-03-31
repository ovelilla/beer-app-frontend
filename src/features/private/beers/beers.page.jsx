// Components
import { BeerForm } from "./components/beer-form/beer-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Config
import {
  getColumnsConfig,
  initialColumnVisibility,
} from "./config/beers.config";
// Hooks
import BeersHook from "./hooks/beers.hook";

const BeersPage = () => {
  const {
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
  } = BeersHook();

  const columns = getColumnsConfig({ handleDelete, handleEdit });

  return (
    <div className="flex w-full">
      <DataTable
        {...{
          columns,
          data,
          handleClickAddRecord,
          initialColumnVisibility,
        }}
      />
      <DialogWrapper
        {...{
          open,
          setOpen,
          title: "Crear cerveza",
          description: "Rellena los campos para crear una nueva cerveza.",
        }}
      >
        <BeerForm
          {...{ form, handleSubmit, label: "Crear", loading, message }}
        />
      </DialogWrapper>
    </div>
  );
};

export default BeersPage;
