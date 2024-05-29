// Components
import { AlertDialogWrapper } from "@/components/alert-dialog-wrapper/alert-dialog-wrapper.component";
import { EntryForm } from "./components/entry-form/entry-form.component";
import { DataTable } from "@/components/data-table/data-table.component";
import { DialogWrapper } from "@/components/dialog-wrapper/dialog-wrapper.component";
// Config
import {
  getColumnsConfig,
  getMultipleSelectActions,
  initialColumnVisibility,
} from "./config/beertionary-admin.config";
// Hooks
import BeertionaryAdminHook from "./hooks/beertionary-admin.hook";

const BeertionaryAdminPage = () => {
  const {
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
  } = BeertionaryAdminHook();

  const columns = getColumnsConfig({ handleDelete, handleEdit });
  const multipleSelectActions = getMultipleSelectActions({
    handleDeleteMultiple,
  });

  return (
    <div className="flex w-full">
      <DataTable
        {...{
          columns,
          data,
          handleCreate,
          initialColumnVisibility,
          multipleSelectActions,
        }}
      />
      <DialogWrapper
        {...{
          open: openDialog,
          setOpen: setOpenDialog,
          title: `${selectedRow ? "Editar" : "Crear"} entrada`,
          description: `Rellena los campos para ${
            selectedRow ? "editar" : "crear"
          } una nueva entrada en el Beertionary.`,
        }}
      >
        <EntryForm
          {...{
            form,
            handleSubmit,
            label: selectedRow ? "Editar" : "Crear",
            loading,
          }}
        />
      </DialogWrapper>
      <AlertDialogWrapper
        {...{
          action: {
            onClick: selectedRows.length
              ? handleSubmitDeleteMultiple
              : handleSubmitDelete,
            label: "Eliminar",
          },
          cancel: {
            label: "Cancelar",
          },
          description: `¿Estás seguro de que quieres eliminar ${
            selectedRows.length > 1
              ? "las entradas seleccionadas"
              : "la entrada seleccionada"
          }?`,
          open: openAlert,
          setOpen: setOpenAlert,
          title: `Eliminar ${selectedRows.length > 1 ? "entradas" : "entrada"}`,
        }}
      />
    </div>
  );
};

export default BeertionaryAdminPage;
