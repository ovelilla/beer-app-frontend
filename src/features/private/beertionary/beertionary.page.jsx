import { Link } from "react-router-dom";
// Components
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/loading/loading.component";
// Hooks
import BeertionaryHook from "./hooks/beertionary.hook";

const BeertionaryPage = () => {
  const { filteredData, handleChange, loading, value } = BeertionaryHook();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="sticky top-0 bg-white z-10 pt-4">
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Buscar..."
          className="bg-white"
        />
      </div>
      <div>
        {Object.entries(filteredData).map(([letter, items]) => (
          <div className="flex flex-col gap-4" key={letter}>
            <div className="sticky top-14 py-4 bg-white border-b">
              <h2 className="font-bold text-4xl">{letter}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {items.map(({ word, description }) => (
                <div key={word} className="flex flex-col gap-2 border-gray-200">
                  <Link
                    to={`/beertionary/${word}`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <h3 className="font-semibold">{word}</h3>
                  </Link>
                  <p className="text-gray-600 line-clamp-3">{description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeertionaryPage;
