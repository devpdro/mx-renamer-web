import styled, { keyframes } from "styled-components";

import { BsCircleFill } from "react-icons/bs";
import { BiShieldAlt2 } from "react-icons/bi";
import { FaFire } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

const moveUp = keyframes`
  to {
    transform: translateY(-3px);
  }
  from {
     transform: translateY(0px);
  }
`;

const moveUpReverse = keyframes`
  to {
    transform: translateY(0px);
  }
  from {
     transform: translateY(-3px);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.header`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 780px;
  margin: 4rem auto 0 auto;
`;

export const Version = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: ${({ theme }) => theme.colors.borderGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.4rem 0.7rem;
  margin-bottom: 1.7rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    border: ${({ theme }) => theme.colors.hoverButtonGreen};
    animation: ${moveUp} 0.3s forwards;
    animation-timing-function: ease-out;
  }

  &:not(:hover) {
    animation: ${moveUpReverse} 0.3s forwards;
    animation-timing-function: ease-out;
  }

  p {
    color: ${({ theme }) => theme.colors.darkGreen};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    span {
      color: ${({ theme }) => theme.colors.mediumGreen};
    }
  }
`;

export const IconCircle = styled(BsCircleFill)`
  color: ${({ theme }) => theme.colors.mediumGreen};
  animation: ${pulseAnimation} 2s infinite;
  padding-right: 0.5rem;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;

  p {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.fontSizes.default};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.4rem;
  }
`;

export const IconCheck = styled(FaCircleCheck)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding-right: 0.5rem;
`;

export const IconLock = styled(BiShieldAlt2)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.largeMedium};
  padding-right: 0.5rem;
`;

export const IconFire = styled(FaFire)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding-right: 0.5rem;
`;

export const TitleBox = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    line-height: 3.4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.mediumlarge};
    color: ${({ theme }) => theme.colors.mediumGray};
    margin-bottom: 3rem;
  }
`;

export const ButtonBox = styled.header`
  display: flex;
  align-items: center;
`;
