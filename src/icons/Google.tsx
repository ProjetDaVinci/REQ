import * as React from "react";
import { SVGProps } from "react";

const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.012 8.325H9.136v2.048h4.883c-.248 2.857-2.626 4.08-4.876 4.08C6.27 14.453 3.75 12.188 3.75 9c0-3.075 2.4-5.453 5.4-5.453 2.317 0 3.675 1.478 3.675 1.478L14.25 3.54S12.42 1.5 9.075 1.5c-4.26 0-7.553 3.6-7.553 7.5 0 3.787 3.098 7.5 7.665 7.5 4.013 0 6.938-2.752 6.938-6.818 0-.862-.113-1.357-.113-1.357Z"
      fill="#fff"
    />
    <path
      d="M0 0v-1h-1v1h1Zm18 0h1v-1h-1v1Zm0 18v1h1v-1h-1ZM0 18h-1v1h1v-1ZM0 1h18v-2H0v2Zm17-1v18h2V0h-2Zm1 17H0v2h18v-2ZM1 18V0h-2v18h2Z"
      fill="#3E3D45"
    />
  </svg>
);

export default Google;
