import { FunctionComponent, SVGProps } from "react";

export type SocialMediaItems = {
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  description: string;
  onClick: () => void;
};
