// Vendors
import { Link } from "react-router-dom";
// Components
import { Sorting } from "@/components/data-table/components/sorting/sorting.component";
import {
  SelectionAllRows,
  SelectionRow,
} from "@/components/data-table/components/selection/selection.component";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Icons
import { LuMoreHorizontal } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";

export const getColumnsConfig = ({ handleDelete, handleEdit }) => {
  return [
    {
      id: "selection",
      cell: ({ row }) => <SelectionRow row={row} />,
      header: ({ table }) => <SelectionAllRows table={table} />,
    },
    {
      accessorKey: "cloudinaryPublicId",
      cell: ({ row }) => (
        <img
          src={`https://res.cloudinary.com/ovelillaa/image/upload/w_48,c_scale,f_auto,q_auto/${row.original.cloudinaryPublicId}`}
          alt={row.original.name}
          className="h-10 w-10 object-cover rounded-full"
          width="40"
          height="40"
          loading="lazy"
        />
      ),
      header: "Imágen",
      meta: "Imágen",
    },
    {
      accessorKey: "name",
      header: ({ column }) => <Sorting column={column} title="Nombre" />,
      cell: ({ row }) => (
        <Link to={`/beer/${row.original._id}`}>{row.original.name}</Link>
      ),
      meta: "Nombre",
    },
    {
      accessorKey: "color",
      header: ({ column }) => <Sorting column={column} title="Color" />,
      meta: "Color",
    },
    {
      accessorKey: "body",
      header: ({ column }) => <Sorting column={column} title="Cuerpo" />,
      meta: "Cuerpo",
    },
    {
      accessorKey: "flavor",
      header: ({ column }) => <Sorting column={column} title="Sabor" />,
      meta: "Sabor",
    },
    {
      accessorKey: "alcohol",
      cell: ({ row }) => `${row.original.alcohol}%`,
      header: ({ column }) => <Sorting column={column} title="Alcohol" />,
      meta: "Alcohol",
    },
    {
      accessorKey: "country",
      header: ({ column }) => <Sorting column={column} title="País" />,
      meta: "País",
    },
    {
      accessorKey: "province",
      header: ({ column }) => <Sorting column={column} title="Provincia" />,
      meta: "Provincia",
    },
    {
      accessorKey: "pairing",
      header: ({ column }) => <Sorting column={column} title="Maridaje" />,
      meta: "Maridaje",
    },
    {
      accessorKey: "brand",
      header: ({ column }) => <Sorting column={column} title="Marca" />,
      meta: "Marca",
    },
    {
      accessorKey: "type",
      header: ({ column }) => <Sorting column={column} title="Clase" />,
      meta: "Clase",
    },
    {
      accessorKey: "style",
      header: ({ column }) => <Sorting column={column} title="Estilo" />,
      meta: "Estilo",
    },
    {
      accessorKey: "craft",
      header: ({ column }) => <Sorting column={column} title="Artesanal" />,
      meta: "Artesanal",
    },
    {
      accessorKey: "fermentation",
      header: ({ column }) => <Sorting column={column} title="Fermentación" />,
      meta: "Fermentación",
    },
    {
      accessorKey: "ibus",
      header: ({ column }) => <Sorting column={column} title="IBUs" />,
      meta: "IBUs",
    },
    {
      accessorKey: "description",
      header: ({ column }) => <Sorting column={column} title="Descripción" />,
      meta: "Descripción",
    },
    {
      accessorKey: "popularity",
      header: ({ column }) => <Sorting column={column} title="Popularidad" />,
      meta: "Popularidad",
    },
    {
      accessorKey: "recommendation",
      header: ({ column }) => <Sorting column={column} title="Recomendación" />,
      meta: "Recomendación",
    },
    {
      accessorKey: "event",
      header: ({ column }) => <Sorting column={column} title="Evento" />,
      meta: "Evento",
    },
    {
      accessorKey: "brewery",
      header: ({ column }) => <Sorting column={column} title="Cervecería" />,
      meta: "Cervecería",
    },
    {
      accessorKey: "reputation",
      header: ({ column }) => <Sorting column={column} title="Reputación" />,
      meta: "Reputación",
    },
    {
      header: "Acciones",
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <LuMoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleEdit(row.original)}>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDelete(row.original)}>
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];
};

export const getMultipleSelectActions = ({ handleDeleteMultiple }) => {
  return [
    {
      label: "Eliminar",
      icon: <LuTrash2 className="h-5 w-5" />,
      onClick: (rows) => {
        handleDeleteMultiple(rows.map((row) => row.original));
      },
    },
  ];
};

export const initialColumnVisibility = {
  body: false,
  brewery: false,
  class: false,
  craft: false,
  description: false,
  event: false,
  fermentation: false,
  flavor: false,
  ibus: false,
  pairing: false,
  popularity: false,
  province: false,
  recommendation: false,
  reputation: false,
};
