import * as React from "react";
import { SVGProps } from "react";

const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m6 0 5.333 4v8H8V7.333H4V12H.667V4L6 0Z" fill="#fff" />
  </svg>
);

export default Home;
