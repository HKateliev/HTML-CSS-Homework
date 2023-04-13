import React from "react";
import { StyledTable } from "./style.css";
const WarehouseTable = () => {
  const warehouses = [
    {
      warehouseID: 1,
      warehouseName: "Warehouse A",
      maxStockAmount: 100,
      client: "Client X",
    },
    {
      warehouseID: 2,
      warehouseName: "Warehouse B",
      maxStockAmount: 200,
      client: "Client Y",
    },
    {
      warehouseID: 3,
      warehouseName: "Warehouse C",
      maxStockAmount: 150,
      client: "Client Z",
    },
  ];

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Warehouse ID</th>
          <th>Warehouse Name</th>
          <th>Max Stock Amount</th>
          <th>Client</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {warehouses.map((warehouse) => (
          <tr key={warehouse.warehouseID}>
            <td>{warehouse.warehouseID}</td>
            <td>{warehouse.warehouseName}</td>
            <td>{warehouse.maxStockAmount}</td>
            <td>{warehouse.client}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default WarehouseTable;
