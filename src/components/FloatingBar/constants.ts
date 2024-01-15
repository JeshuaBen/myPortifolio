import { TFloatingBar } from "./types";
import IconMail from "../../assets/iconMail.svg?react";
import IconGrid from "../../assets/iconGrid.svg?react";
import IconUser from "../../assets/iconUser.svg?react";
import IconMonitor from "../../assets/iconMonitor.svg?react";

export const FloatingBarItems: TFloatingBar[] = [
  {
    svg: IconGrid,
    description: "",
    isSelected: false,
  },

  {
    svg: IconUser,
    description: "",
    isSelected: false,
  },
  {
    svg: IconMonitor,
    description: "",
    isSelected: false,
  },
  {
    svg: IconMail,
    description: "",
    isSelected: false,
  },
];
