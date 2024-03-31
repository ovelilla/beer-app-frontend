// Components
import { AddRecord } from "./components/add-record/add-record.component";
import { Filter } from "./components/filter/filter.component";
import { Visibility } from "./components/visibility/visibility.component";

export const Header = ({
  globalFilter,
  handleClickAddRecord,
  setGlobalFilter,
  table,
}) => (
  <div className="flex items-center gap-4">
    <Filter {...{ globalFilter, setGlobalFilter }} />
    <AddRecord {...{ handleClickAddRecord }} />
    <Visibility {...{ table }} />
  </div>
);
