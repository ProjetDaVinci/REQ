import * as React from "react";
import { SVGProps } from "react";

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 1.53c-4.125 0-7.5 3.367-7.5 7.515a7.515 7.515 0 0 0 6.33 7.425v-5.25H5.925V9.045H7.83V7.388c0-1.883 1.117-2.918 2.835-2.918.818 0 1.673.143 1.673.143v1.852h-.945c-.93 0-1.223.578-1.223 1.17v1.41h2.085l-.338 2.175H10.17v5.25a7.5 7.5 0 0 0 6.33-7.425c0-4.147-3.375-7.515-7.5-7.515Z"
      fill="#fff"
    />
    <path
      d="M0 0v-1h-1v1h1Zm18 0h1v-1h-1v1Zm0 18v1h1v-1h-1ZM0 18h-1v1h1v-1ZM0 1h18v-2H0v2Zm17-1v18h2V0h-2Zm1 17H0v2h18v-2ZM1 18V0h-2v18h2Z"
      fill="#3E3D45"
    />
  </svg>
);

export default Facebook;
