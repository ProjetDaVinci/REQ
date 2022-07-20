import * as React from "react";
import { SVGProps } from "react";

const Like = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    cursor="pointer"
  >
    <path
      d="m7.5 15-1.088-1.079C2.55 10.104 0 7.578 0 4.496 0 1.97 1.815 0 4.125 0 5.43 0 6.683.662 7.5 1.7 8.318.662 9.57 0 10.875 0 13.185 0 15 1.97 15 4.496c0 3.082-2.55 5.607-6.412 9.425L7.5 15Z"
      fill="#fff"
    />
  </svg>
);

export default Like;
