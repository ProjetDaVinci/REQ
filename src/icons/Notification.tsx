import * as React from "react";
import { SVGProps } from "react";

const Notification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.673 1.91a5.237 5.237 0 0 0-3.928 5.072v3.49a.582.582 0 0 1-.58.583 1.165 1.165 0 1 0 .001 2.327h11.631c.644 0 1.166-.522 1.166-1.164 0-.643-.523-1.163-1.164-1.163a.58.58 0 0 1-.58-.583v-3.49c0-2.44-1.67-4.49-3.928-5.072v-.6a1.308 1.308 0 1 0-2.618 0v.6Zm-.728 12.054h4.073a2.036 2.036 0 0 1-4.073 0Z"
      fill="#fff"
    />
  </svg>
);

export default Notification;
