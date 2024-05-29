// Components
import { Alert } from "@/components/alert/alert.component";
import { Results } from "./components/results/results.component";
// Constants
import { FinderForm } from "./components/finder-form/finder-form.component";
// Hooks
import FinderHook from "./hooks/finder.hook";

const FinderPage = () => {
  const { data, form, handleLike, handleSubmit, handlePrevious, loading } =
    FinderHook();

  if (data && data.length) {
    return <Results {...{ data, handleLike, handlePrevious }} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold">Encuentra tu cerveza ideal</h1>
      <FinderForm
        {...{
          form,
          handleSubmit,
          label: "Encontrar cervezas",
          loading,
        }}
      />
      {data && !data.length && (
        <Alert type="info" text="No se encontraron cervezas" />
      )}
    </div>
  );
};

export default FinderPage;
