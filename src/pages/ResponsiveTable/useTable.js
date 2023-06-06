import { useState } from "react";
import { users } from "../../db/users";
import { defaultColumns } from "../../configs/table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useClickOutSide from "../../hooks/useClickOutSide";

export const useTable = () => {
  const [data] = useState(() => [...users]);
  const [columns] = useState(() => [...defaultColumns]);

  const [showColumnsDropDown, setShowColumnsDropDown] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel()
  });

  const showColumnsDropDownRef = useClickOutSide(() => setShowColumnsDropDown(false));

  const handleShowColumnsDropDown = () => {
    setShowColumnsDropDown(true);
  };  

  return {
    table,
    showColumnsDropDown,
    showColumnsDropDownRef,
    handleShowColumnsDropDown,
  };
};