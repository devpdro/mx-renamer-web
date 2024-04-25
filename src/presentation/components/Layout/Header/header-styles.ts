import styled, { keyframes } from "styled-components";

import { BsCircleFill } from "react-icons/bs";
import { BiShieldAlt2 } from "react-icons/bi";
import { FaFire } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

const moveUp = keyframes`
  to {
    transform: translateY(-2px);
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
     transform: translateY(-2px);
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
  margin: 3.4rem auto 0 auto;
  padding: 0 2rem;
  @media (min-width: 651px) and (max-width: 1080px) {
    margin: 3.4rem auto 0 auto;
  }

  @media (max-width: 650px) {
    align-items: flex-start;
    padding: 0 1.7rem;
    margin: 2rem auto 0 auto;
  }
`;

export const Version = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: ${({ theme }) => theme.colors.borderGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.7rem;
  margin-bottom: 1.7rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  @media (min-width: 651px) and (max-width: 702px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: 0rem;
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: 0rem;
  }

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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.08rem;
    padding: 0 1.4rem;

    @media (min-width: 701px) and (max-width: 1080px) {
      font-size: ${({ theme }) => theme.fontSizes.default};
    }

    @media (max-width: 700px) {
      display: none;
    }
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
    line-height: 3.2rem;
    margin-bottom: 2rem;
    @media (max-width: 650px) {
      text-align: left;
      padding: 0 1rem 0 0;
      font-size: 2rem;
      line-height: 2.1rem;
      margin-bottom: 1.5rem;
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.mediumlarge};
    color: ${({ theme }) => theme.colors.mediumGray};
    margin-bottom: 3rem;
    padding: 0 1rem;
    @media (max-width: 650px) {
      font-size: 1.05rem;
      padding: 0 2rem 0 0;
      line-height: 1.8rem;
      margin-bottom: 2rem;
      text-align: left;
    }
  }
`;

export const ButtonBox = styled.header`
  display: flex;
  align-items: center;
`;
