// Components
import { Button } from "@/components/ui/button";
import { Result } from "./components/result/result.component";
// Icons
import { LuArrowLeft } from "react-icons/lu";

export const Results = ({ data, handleLike, handlePrevious }) => (
  <div className="flex flex-col gap-4 lg:gap-6">
    <Button variant="outline" onClick={handlePrevious} className="gap-2">
      <LuArrowLeft className="w-4 h-4" />
      Volver
    </Button>
    <h2>Se encontraron las siguientes cervezas:</h2>
    <ul className="flex flex-col gap-4 lg:gap-6">
      {data.map((beer) => (
        <Result {...{ beer, handleLike }} key={beer._id} />
      ))}
    </ul>
  </div>
);
