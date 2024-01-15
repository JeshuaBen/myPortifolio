import styled from "styled-components";

export const Container = styled.div`
  padding: 36px 36px 40px 36px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 40%;
  border-bottom-right-radius: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  height: 98px;
  width: 98px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
`;

export const Image = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50%;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 0rem 2rem 0rem;
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  font-size: ${({ theme }) => theme.FONT_SIZE.LOGO_M};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Description = styled.span`
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  font-size: ${({ theme }) => theme.FONT_SIZE.CODE_M_LABEL_U_M_L};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
