import * as React from "react";
import { SVGProps } from "react";

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={7} height={10} rx={1} fill="#fff" />
    <rect y={11} width={7} height={5} rx={1} fill="#fff" />
    <rect
      x={16}
      y={16}
      width={7}
      height={10}
      rx={1}
      transform="rotate(-180 16 16)"
      fill="#fff"
    />
    <rect
      x={16}
      y={5}
      width={7}
      height={5}
      rx={1}
      transform="rotate(-180 16 5)"
      fill="#fff"
    />
  </svg>
);

export default DashboardIcon;
