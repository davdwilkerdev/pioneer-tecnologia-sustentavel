/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Asset3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Asset3SvgIcon(props: Asset3SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 2"}
      viewBox={"0 0 280.63 643.01"}
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
            "M280.63 84.12v527.53c0 17.32-20.64 31.36-46.08 31.36H46.06C20.62 643.01 0 628.97 0 611.65V84.12C0 66.8 20.62 52.76 46.06 52.76h33.52V17.47C79.58 7.82 91.05 0 105.23 0h72.25c14.16 0 25.65 7.82 25.65 17.47v35.29h31.42c25.44 0 46.08 14.04 46.08 31.36"
          }
        ></path>

        <path
          fill={"#fff"}
          d={
            "M110.12 213.19V416.8h32.06v38.59H37.78V416.8h32.06V251.78H37.78v-38.59h72.35Zm48.65 242.2v-242.2h40.29V416.8h54.56v38.59z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Asset3SvgIcon;
/* prettier-ignore-end */
