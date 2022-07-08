import React, { TableHTMLAttributes } from 'react';
import { useTable, UseTableOptions } from 'react-table';
import { StyledTable } from './styled';

export interface IPropsTable extends UseTableOptions<object> {
  className: string;
  controlBtn: boolean;
}

export const Table: React.FC<IPropsTable> = ({
  columns,
  data,
  className,
  controlBtn = false,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const tableprops = getTableProps();

  const tablebodyprops = getTableBodyProps();

  return (
    <StyledTable {...{ data, columns, className, controlBtn }}>
      <table {...{ tableprops }}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const headergroupprops = headerGroup.getHeaderGroupProps();
            return (
              <tr
                {...{ headergroupprops }}
                key={headerGroup.totalHeaderCount + 1}
              >
                {headerGroup.headers.map((column) => {
                  const headerColumnProps = column.getHeaderProps();
                  return (
                    <th {...{ headerColumnProps }} key={column.id}>
                      {column.render('Header')}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody {...{ tableprops }}>
          {rows.map((row) => {
            prepareRow(row);
            const rowsProps = row.getRowProps();
            return (
              <tr {...{ rowsProps }} key={row.id}>
                {row.cells.map((cell) => {
                  const cellsProps = cell.getCellProps();
                  return (
                    <td {...{ cellsProps }} key={cell.value}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};
