import styled from 'styled-components';
import { IPropsTable } from './Table';

export const StyledTable = styled.div<IPropsTable>`
  .table_button-group {
    display: flex;
    flex-direction: row;

    button:not(:last-child) {
      margin-right: 1.2rem;
    }
  }

  table {
    border-collapse: separate;
    width: 100%;
    //max-width: 882px;
    border-spacing: 0 0.2rem;

    thead {
      text-align: left;

      //border-radius: 0.5rem;
      //box-shadow: 0 0 0 1px yellow;

      tr {
        color: #fff;
        font-size: 14px;
        height: 2.5rem;
        font-weight: 700;
        //border-radius: 0.5rem;
        //box-shadow: 0 0 0 1px blue;
        //border: 1px solid blue;
        th {
          padding: 0 1.5rem;
          background-color: #535353;
          :first-child {
            border-radius: 0.5rem 0 0 0.5rem;
          }
          :last-child {
            border-radius: 0 0.5rem 0.5rem 0;
          }
        }
      }
    }

    tbody {
      text-align: left;
      //max-height: 150px;
      //overflow-y: scroll;
      tr {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.75);
        font-size: 12px;
        height: 2.5rem;
        font-weight: 400;

        td {
          border: 1px solid #ececec;
          border-right: none;
          border-left: none;
          padding: 0 1.5rem;

          &:first-child {
            border-radius: 0.5rem 0 0 0.5rem;
            border-left: 1px solid #ececec;
          }

          &:last-child {
            border-radius: 0 0.5rem 0.5rem 0;
            border-right: 1px solid #ececec;

            ${({ controlBtn }) =>
              controlBtn &&
              `
              display: flex;
              flex-direction: row;
              align-items: center;
              height: 2.5rem;
              justify-content: flex-end;
              padding: 0 0.5rem;
            `}
          }
        }
      }
    }
  }
`;
