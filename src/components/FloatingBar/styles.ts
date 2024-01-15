import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: absolute;
  left: 75px;
  top: 25%;

  background-color: ${({ theme }) => theme.COLORS.BLACK_500};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 40px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;
