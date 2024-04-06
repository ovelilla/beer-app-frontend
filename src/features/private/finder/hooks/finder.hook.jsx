// Vendors
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import fidnerConstants from "../constants/finder.constants";
// Schemas
import { FinderSchema } from "../schemas/finder.schema";

const FinderHook = () => {
  const form = useForm({
    resolver: zodResolver(FinderSchema),
    defaultValues: fidnerConstants.DEFAULT_FORM_VALUES,
  });

  return {
    form,
  };
};

export default FinderHook;
