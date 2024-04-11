import styled from "styled-components";

export const Container = styled.main`
  height: 400px;
  width: 100%;
  overflow-x: auto;
  table {
    border-right: ${({ theme }) => theme.colors.borderBlack};
    border-left: ${({ theme }) => theme.colors.borderBlack};
    border-bottom: ${({ theme }) => theme.colors.borderBlack};
  }
`;

export const TableContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
