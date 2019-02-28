import React from "react"

const TableComponent = (props) => {
  const dataColumns = props.tableData.columns;
  const dataRows = props.tableData.rows;
  //console.log(dataColumns,dataRows);

  let tableHeaders = (<thead>
    <tr>
      {dataColumns.map(function (column) {
        return <th key={column}>{column}</th>;
      })}
    </tr>
  </thead>);

  let tableBody = dataRows.map(function (row) {
    //console.log('row',row.EndrollementNo);
    return (
      <tr key={row.EndrollementNo}>
        {dataColumns.map(function (column) {
          //console.log(row[column]);
          return <td key={row[column]}>{row[column]}</td>;
        })}
      </tr>);

  });

  return (
    <table className="table table-bordered table-hover" width="100%">
      {tableHeaders}
      <tbody>{tableBody}</tbody>
    </table>
  )
}


export default TableComponent;
