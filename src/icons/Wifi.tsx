import * as React from "react";
import { SVGProps } from "react";

const Wifi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10.8 18 3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2l3.6 4.8Zm0-18C6.75 0 3.01 1.34 0 3.6L1.8 6c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C18.59 1.34 14.85 0 10.8 0Zm0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C6.9 9.67 8.77 9 10.8 9c2.03 0 3.9.67 5.4 1.8L18 8.4C15.99 6.89 13.5 6 10.8 6Z"
      fill="#fff"
    />
  </svg>
);

export default Wifi;
