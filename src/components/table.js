import React from "react"

const TableComponent = (props) => {
  const dataColumns = props.tableData.columns;
  const dataRows = props.tableData.rows;
  console.log(dataColumns,dataRows);

  let tableHeaders = (<thead>
    <tr> 
      {dataColumns.map(function(column)
      {
        return <th>{column}</th>;
      })}
    </tr>
  </thead>);

let tableBody = dataRows.map(function(row){
  return (
    <tr>
      {dataColumns.map(function(column){
        return <td>{row[column]}</td>;
      })}
    </tr>);
  
});

return (
<table className="table table-bordered table-hover" width="100%">
  {tableHeaders}
  {tableBody}
</table>
)
}


export default TableComponent;
