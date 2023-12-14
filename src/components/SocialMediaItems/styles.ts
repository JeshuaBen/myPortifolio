import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIA_M};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.MEDIA_M_PARA_M};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
