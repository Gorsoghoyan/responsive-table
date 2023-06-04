import { useEffect, useState } from "react";
import { users } from "../../db/users";
import { columnsConfig } from "../../configs/table";
// import { createTable, useTableIntance, getCoreRowModel } from "@tanstack/react-table";
import useClickOutSide from "../../hooks/useClickOutSide";

// const table = createTable();
// const defaultColumns = [
//   table.createDataColumn("id", { id: "ID" })
// ];

export const useTable = () => {

  const [columns, setColumns] = useState(columnsConfig);

  const [showColumnsDropDown, setShowColumnsDropDown] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState({});

  const showColumnsRef = useClickOutSide(() => setShowColumnsDropDown(false));

  // const intance = useTableIntance(table, {
  //   data: users,
  //   columns,
  //   state: {
  //     columnVisibility
  //   },
  //   getCoreRowModel: getCoreRowModel()
  // })

  useEffect(() => {
    
  }, [])

  const handleShowColumnsDropDown = () => {
    setShowColumnsDropDown(true);
  };  

  const handleColumnChange = (e, id) => {
    setColumns(columns.map(column => {
      if (column.id === id) column.visibility = e.target.checked;
      return column;
    }))
  };

  return {
    users,
    columns,
    showColumnsDropDown,
    showColumnsRef,
    handleShowColumnsDropDown,
    handleColumnChange,
  };
};