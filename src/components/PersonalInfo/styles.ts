import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoDescrption = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  font-size: ${({ theme }) => theme.FONT_SIZE.CODE_M_LABEL_U_M_L};
`;
