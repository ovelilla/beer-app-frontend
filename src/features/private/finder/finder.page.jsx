// Constants
import { FinderForm } from "./components/finder-form/finder-form.component";
// Hooks
import FinderHook from "./hooks/finder.hook";

const FinderPage = () => {
  const { form } = FinderHook();
  return (
    <FinderForm
      {...{
        form,
        handleSubmit: () => {
          console.log("Submit");
        },
        label: "Encontrar cervezas",
        loading: false,
      }}
    />
  );
};

export default FinderPage;
