import styled from "styled-components";

export const TableId = styled.table`
  text-align: left;
  width: ${(props) => props.width || "auto"};
  caption {
    text-align: left;
  }
`;
