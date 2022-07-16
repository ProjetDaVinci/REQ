import * as React from "react";
import { SVGProps } from "react";

const Key = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.727 8c-1.05 0-1.909-.9-1.909-2s.86-2 1.91-2c1.05 0 1.908.9 1.908 2s-.859 2-1.909 2Zm5.346-4c-.764-2.3-2.864-4-5.346-4C2.577 0 0 2.7 0 6s2.577 6 5.727 6c2.482 0 4.582-1.7 5.346-4h3.245v4h3.818V8H21V4h-9.927Z"
      fill="#fff"
    />
  </svg>
);

export default Key;
