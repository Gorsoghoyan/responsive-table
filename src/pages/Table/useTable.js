import { useEffect, useState } from "react";
import { columnsConfig } from "../../configs/table";
import useClickOutSide from "../../hooks/useClickOutSide";

export const useTable = () => {

  const [columns, setColumns] = useState(columnsConfig);

  const [showColumns, setShowColumns] = useState(false);

  const showColumnsRef = useClickOutSide(() => setShowColumns(false));


  useEffect(() => {
    
  }, [])

  const handleShowColumns = () => {
    setShowColumns(true);
  };  

  const handleColumnChange = (e, id) => {
    setColumns(columns.map(column => {
      if (column.id === id) column.visibility = e.target.checked;
      return column;
    }))
  };

  return {
    columns,
    showColumns,
    showColumnsRef,
    handleShowColumns,
    handleColumnChange,
  };
};