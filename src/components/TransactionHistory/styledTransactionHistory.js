import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px;
  color: var(--mid-text-color);
  background-color: var(--light-back-color);
  font-size: 14px;
  td,
  th {
    padding: 4px 8px;
    text-transform: capitalize;
  }
  tr:nth-child(2n) {
    background-color: var(--mid-back-color);
  }
`;

export const TableHead = styled.thead`
  color: var(--light-text-color);
  background-color: var(--accent-color);
`;
