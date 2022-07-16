import * as React from "react";
import { SVGProps } from "react";

const Dump = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5.75H7.875L7.125 0h-3.75l-.75.75H0v1.5h10.5V.75ZM.75 12a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V3h-9v9Z"
      fill="#fff"
    />
  </svg>
);

export default Dump;
