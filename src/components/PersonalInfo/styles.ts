import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InfoDescrption = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  font-size: ${({ theme }) => theme.FONT_SIZE.CODE_M_LABEL_U_M_L};
`;

export const TagsWrapper = styled.div`
  max-width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN200};
`;

export const Tag = styled.span`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  font-size: ${({ theme }) => theme.FONT_SIZE.CODE_M_LABEL_U_M_L};
`;
