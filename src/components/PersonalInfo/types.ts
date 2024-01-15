import { FunctionComponent, SVGProps } from "react";

export type TPersonalInfo = {
  email: string;
  nacionality: string;
  jobDescription: string;
  experience: string;
};

export type TInfo = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  description: string;
}[];
