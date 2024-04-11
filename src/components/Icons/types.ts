import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  filled?: boolean;
  label?: string;

  isSelected?: boolean; /// for nextui, fixes nasty warning
  isIndeterminate?: boolean; /// for nextui, fixes nasty warning
  disableAnimation?: boolean; /// for nextui, fixes nasty warning
};
