/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Asset1Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Asset1Svg2Icon(props: Asset1Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 2"}
      viewBox={"0 0 499.14 674.97"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 1"}>
        <path
          fill={"#231f20"}
          d={
            "M398.24 0H263.16c-28.67 0-55.73 11.39-73.3 30.86L160.1 63.85h-10.64c1.71-1.65 2.74-3.83 2.74-6.22V47.24c0-4.38-3.51-8.07-8.26-9.08V15.39c0-8.5-8.02-15.39-17.91-15.39H39.75c-9.89 0-17.93 6.89-17.93 15.39v22.52c-5.61.39-10.02 4.43-10.02 9.34v10.39c0 2.39 1.03 4.56 2.74 6.22h-2.61c-6.59 0-11.94 4.6-11.94 10.26v538.73c0 34.31 32.39 62.14 72.35 62.14h354.43c39.96 0 72.35-27.83 72.35-62.14V86.64C499.12 38.79 453.94 0 398.23 0Zm26.86 72c0 15.15-14.3 27.43-31.96 27.43H274.09c-25.67 0-46.49-17.88-46.49-39.93 0-6.89 3.24-13.12 8.5-17.63 5.24-4.51 12.5-7.3 20.52-7.3h136.52c17.65 0 31.96 12.28 31.96 27.43v9.99Z"
          }
        ></path>

        <path
          fill={"#fff"}
          d={
            "M222.13 371.46c0-7.42-1.25-11.65-3.75-12.7-1.45-.73-4.07-1.09-7.86-1.09-.97 0-1.98.04-3.02.12-5.24.24-8.19 2.58-8.83 7.02l-.48 11.86H157.9l5.32-131.51h99.2v38.59h-60.49l-1.94 40.53c2.5-2.9 9.27-4.35 20.32-4.35 1.53 0 3.06.08 4.6.24 12.9 1.13 22.74 6.33 29.52 15.61 5.32 7.34 7.98 19.24 7.98 35.69v67.39q0 52.26-52.26 52.26c-52.26 0-52.14-17.42-52.14-52.26v-30.49h40.29v30.49c0 9.12 3.95 13.67 11.86 13.67s11.98-4.56 11.98-13.67v-67.39Zm58.08 115.89v-242.2h40.29v203.61h54.56v38.59z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Asset1Svg2Icon;
/* prettier-ignore-end */
