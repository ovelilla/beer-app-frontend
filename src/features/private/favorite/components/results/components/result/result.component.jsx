// Vendors
import { Link } from "react-router-dom";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { LuHeart } from "react-icons/lu";

export const Result = ({ beer, handleLike }) => (
  <li className="flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden">
    <div className="flex md:w-1/3 relative overflow-hidden min-h-48">
      <img
        src={`https://res.cloudinary.com/ovelillaa/image/upload/w_480,c_scale,f_auto,q_auto/${beer.cloudinaryPublicId}`}
        alt={beer.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
    <div className="flex flex-col flex-1 p-4 lg:p-6 gap-2">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h3 className="font-bold text-lg text-gray-800">
          <Link to={`/beer/${beer._id}`}>{beer.name}</Link>
        </h3>
        <span className="shrink-0 bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
          Alcohol: {beer.alcohol}%
        </span>
      </div>
      <p className="text-gray-600">{beer.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm italic">{beer.type}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => handleLike(beer)}>
            <LuHeart
              className="h-6 w-6"
              {...(beer.userLike && { fill: "red", color: "red" })}
            />
          </Button>
          <span>
            {beer.likesCount} {beer.likesCount === 1 ? "like" : "likes"}
          </span>
        </div>
      </div>
    </div>
  </li>
);
