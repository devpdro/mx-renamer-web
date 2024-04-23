import styled from "styled-components";

import { LiaCloudUploadAltSolid } from "react-icons/lia";

export const Container = styled.section`
  border: 2px dashed rgba(28, 28, 28, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const BoxContainer = styled.div`
  padding: 3.5rem 2rem;
`;

export const IconBox = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
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
  padding: 2rem 0rem 2rem 0;
  margin-top: 0.5rem;
  p {
    font-size: ${({ theme }) => theme.fontSizes.mediumlarge};
    color: ${({ theme }) => theme.colors.mediumGray};
    @media (max-width: 820px) {
      font-size: 1.05rem;
      text-align: center;
    }
  }
`;
