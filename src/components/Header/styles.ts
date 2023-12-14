import styled, { css } from "styled-components";
import { HeaderProps } from "./types";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  padding: 48px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LogoTitle = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.LOGO_M};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.H2_M_LOGO_M};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MenuTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuTags = styled.span<HeaderProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.IBM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MENU_M};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.ARTICLE_U_MENU_M};
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.COLORS.LIGHT_GREEN100};
    `}
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
