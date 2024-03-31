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

export const getColumnsConfig = ({ handleDelete, handleEdit }) => {
  return [
    {
      id: "selection",
      header: ({ table }) => <SelectionAllRows table={table} />,
      cell: ({ row }) => <SelectionRow row={row} />,
    },
    {
      accessorKey: "name",
      header: ({ column }) => <Sorting column={column} title="Nombre" />,
    },
    {
      accessorKey: "color",
      header: ({ column }) => <Sorting column={column} title="Color" />,
    },
    {
      accessorKey: "body",
      header: ({ column }) => <Sorting column={column} title="Cuerpo" />,
    },
    {
      accessorKey: "flavor",
      header: ({ column }) => <Sorting column={column} title="Sabor" />,
    },
    {
      accessorKey: "alcohol",
      header: ({ column }) => <Sorting column={column} title="Alcohol" />,
      cell: ({ row }) => `${row.original.alcohol}%`,
    },
    {
      accessorKey: "country",
      header: ({ column }) => <Sorting column={column} title="País" />,
    },
    {
      accessorKey: "province",
      header: ({ column }) => <Sorting column={column} title="Provincia" />,
    },
    {
      accessorKey: "pairing",
      header: ({ column }) => <Sorting column={column} title="Maridaje" />,
    },
    {
      accessorKey: "brand",
      header: ({ column }) => <Sorting column={column} title="Marca" />,
    },
    {
      accessorKey: "class",
      header: ({ column }) => <Sorting column={column} title="Clase" />,
    },
    {
      accessorKey: "style",
      header: ({ column }) => <Sorting column={column} title="Estilo" />,
    },
    {
      accessorKey: "craft",
      header: ({ column }) => <Sorting column={column} title="Artesanal" />,
    },
    {
      accessorKey: "fermentation",
      header: ({ column }) => <Sorting column={column} title="Fermentación" />,
    },
    {
      accessorKey: "ibus",
      header: ({ column }) => <Sorting column={column} title="IBUs" />,
    },
    {
      accessorKey: "description",
      header: ({ column }) => <Sorting column={column} title="Descripción" />,
    },
    {
      accessorKey: "popularity",
      header: ({ column }) => <Sorting column={column} title="Popularidad" />,
    },
    {
      accessorKey: "recommendation",
      header: ({ column }) => <Sorting column={column} title="Recomendación" />,
    },
    {
      accessorKey: "brewery",
      header: ({ column }) => <Sorting column={column} title="Cervecería" />,
    },
    {
      accessorKey: "reputation",
      header: ({ column }) => <Sorting column={column} title="Reputación" />,
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

export const initialColumnVisibility = {
  body: false,
  province: false,
  pairing: false,
  class: false,
  craft: false,
  fermentation: false,
  ibus: false,
  description: false,
  popularity: false,
  recommendation: false,
  brewery: false,
  reputation: false,
};
