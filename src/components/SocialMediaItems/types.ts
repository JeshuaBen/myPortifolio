import { FunctionComponent, SVGProps } from "react";

export type TSocialMediaItems = {
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  description: string;
  onClick: () => void;
};
