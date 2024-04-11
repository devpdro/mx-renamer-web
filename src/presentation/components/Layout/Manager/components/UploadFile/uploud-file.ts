import styled from "styled-components";

import { LiaCloudUploadAltSolid } from "react-icons/lia";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 2px dashed rgba(28, 28, 28, 0.3);
`;

export const BoxContainer = styled.div`
  padding: 1rem 2rem;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colors.blue};
`;

export const Icon = styled(LiaCloudUploadAltSolid)`
  font-size: 8rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  padding: 2rem 0rem;
  p {
    font-size: 1.1rem;
  }
`;
