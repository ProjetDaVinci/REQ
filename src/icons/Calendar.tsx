import * as React from "react";
import { SVGProps } from "react";

const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 18H2V7h14v11ZM13 0v2H5V0H3v2H2C.89 2 0 2.89 0 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1V0h-2Zm1 11H9v5h5v-5Z"
      fill="#fff"
    />
  </svg>
);

export default Calendar;
