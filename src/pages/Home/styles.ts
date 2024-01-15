import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FONT_FAMILY.UBUNTU};
  font-size: ${({ theme }) => theme.FONT_SIZE.BG_TEXT_U};
  color: ${({ theme }) => theme.COLORS.GREEN200};
  text-align: center;
`;
