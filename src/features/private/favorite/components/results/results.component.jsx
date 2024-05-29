// Components
import { Result } from "./components/result/result.component";

export const Results = ({ data, handleLike }) => (
  <div className="flex flex-col gap-4 lg:gap-6">
    <h1 className="text-xl font-semibold">Mis cervezas favoritas</h1>
    <ul className="flex flex-col gap-4 lg:gap-6">
      {data.map((beer) => (
        <Result {...{ beer, handleLike }} key={beer._id} />
      ))}
    </ul>
  </div>
);
