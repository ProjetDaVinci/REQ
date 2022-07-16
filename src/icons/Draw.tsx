import * as React from "react";
import { SVGProps } from "react";

const Draw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.784 1.179 12.797.21c-.272-.281-.751-.281-1.039 0l-6.6 6.47 2.025 1.986 6.601-6.47a.71.71 0 0 0 0-1.018Zm-10.1 6.766c-.586 0-1.149.228-1.563.635a2.145 2.145 0 0 0-.648 1.531c0 .946-.854 1.445-1.473 1.445C.678 12.436 1.842 13 2.947 13c.782 0 1.531-.304 2.084-.846a2.86 2.86 0 0 0 .863-2.043c0-.574-.233-1.125-.647-1.531a2.233 2.233 0 0 0-1.563-.635Z"
      fill="#fff"
    />
  </svg>
);

export default Draw;
