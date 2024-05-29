// Components
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/loading/loading.component";
// Hooks
import BeerHook from "./hooks/beer.hook";
// Icons
import { LuHeart } from "react-icons/lu";

const BeerPage = () => {
  const { data, handleLike, loading } = BeerHook();

  if (loading) {
    return <Loading />;
  }

  console.log(data);

  if (!data) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-semibold">
          No se ha encontrado ninguna cerveza
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full p-4 lg:p-6 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex md:w-1/3 relative overflow-hidden min-h-48">
          <img
            src={`https://res.cloudinary.com/ovelillaa/image/upload/w_480,c_scale,f_auto,q_auto/${data.cloudinaryPublicId}`}
            alt={data.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        <div className="md:w-2/3 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold">
              {data.name} - {data.style}
            </h2>
            <p className="text-md text-gray-600">
              {data.brewery}, {data.province} - {data.country}
            </p>
          </div>

          <div className="flex gap-2">
            <span className="inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
              Alcohol: {data.alcohol}%
            </span>
            <span className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
              IBUs: {data.ibus}
            </span>
            <span className="inline-block bg-yellow-200 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold">
              Color: {data.color}
            </span>
            <span className="inline-block bg-red-200 text-red-800 rounded-full px-3 py-1 text-sm font-semibold">
              Cuerpo: {data.body}
            </span>
          </div>
          <p className="text-gray-700">{data.description}</p>
          <div className="">
            <h3 className="text-lg font-semibold">Maridaje recomendado:</h3>
            <p className="text-gray-600">{data.pairing}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
              {data.craft === "Si" ? "Artesanal" : "Industrial"}
            </span>
            <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
              Evento {data.event}
            </span>
            <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full">
              {data.popularity}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => handleLike(data)}>
            <LuHeart
              className="h-6 w-6"
              {...(data.userLike && { fill: "red", color: "red" })}
            />
          </Button>
          <span>
            {data.likesCount} {data.likesCount === 1 ? "like" : "likes"}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Detalles adicionales:</h3>
          <p className="text-gray-600">Fermentación: {data.fermentation}</p>
          <p className="text-gray-600">Provincia: {data.province}</p>
          <p className="text-gray-600">Reputación: {data.reputation}</p>
          <p className="text-gray-600">Recomendación: {data.recommendation}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerPage;
