// Vendors
import { Link } from "react-router-dom";
// Components
import { Loading } from "@/components/loading/loading.component";
// Hooks
import EntryHook from "./hooks/entry.hook";

const EntryPage = () => {
  const { data, loading } = EntryHook();

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-semibold">
          No se ha encontrado ninguna entrada con esa palabra
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <dl className="flex flex-col gap-10">
        <dt className="text-8xl font-bold">{data.word}</dt>
        <dd className="text-lg text-gray-700 max-w-prose">
          {data.description}
        </dd>
      </dl>
      <Link
        to="/beertionary"
        className="mt-5 text-blue-500 hover:text-blue-600 font-semibold"
      >
        Volver al beertionary
      </Link>
    </div>
  );
};

export default EntryPage;
