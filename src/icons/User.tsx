import * as React from "react";
import { SVGProps } from "react";

const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.003 0A8.002 8.002 0 0 0 8 16.002a8.002 8.002 0 0 0 7.473-10.855A8.002 8.002 0 0 0 8.003 0Zm0 2.858a2.286 2.286 0 1 1 0 4.573 2.286 2.286 0 0 1 0-4.573Zm0 11.432a6.287 6.287 0 0 1-4.847-2.286 5.144 5.144 0 0 1 9.717 0 6.287 6.287 0 0 1-4.87 2.286Z"
      fill="#fff"
    />
  </svg>
);

export default User;
