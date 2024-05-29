// Components
import { Loading } from "@/components/loading/loading.component";
import { Results } from "./components/results/results.component";
// Hooks
import FavoriteHook from "./hooks/favorite.hook";

const FavoritePage = () => {
  const { data, handleLike, loading } = FavoriteHook();

  if (loading) {
    return <Loading />;
  }

  return <Results {...{ data, handleLike }} />;
};

export default FavoritePage;
