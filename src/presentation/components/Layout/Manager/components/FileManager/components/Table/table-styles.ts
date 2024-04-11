import styled from "styled-components";

export const TableId = styled.table`
  width: ${(props) => props.width || "80"};
  text-align: left;
  caption {
    border: ${({ theme }) => theme.colors.borderBlack};
    background-color: ${({ theme }) => theme.colors.whiteSecondary};
    position: sticky;
    top: 0;
    text-align: left;
    padding: 0.3rem 0.3rem;
    font-size: 1rem;
  }
  tbody {
    tr {
      color: ${({ theme }) => theme.colors.borderBlack};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      th {
        font-weight: ${({ theme }) => theme.fontWeight.light};
        font-size: 1rem;
        padding: 0.3rem 0.01rem;
      }
    }
  }
`;
